import sqlite3
from datetime import datetime
from typing import List, Dict, Union

DB_NAME = "mmathando.db"

class MemoryService:
    """
    Handles persistent storage and retrieval of chat history using SQLite.
    This replaces the file-based JSON memory.
    """
    def __init__(self):
        self.conn = sqlite3.connect(DB_NAME)
        self.conn.row_factory = sqlite3.Row
        self.cursor = self.conn.cursor()
        
        self._create_table()

    def _create_table(self):
        """Creates the chat_history table if it doesn't already exist."""
        create_table_query = """
        CREATE TABLE IF NOT EXISTS chat_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT NOT NULL,
            role TEXT NOT NULL,
            content TEXT NOT NULL,
            timestamp TEXT NOT NULL
        );
        """
        self.cursor.execute(create_table_query)
        self.conn.commit()

    def add_message(self, session_id: str, role: str, content: str):
        """Adds a new message (user or assistant) to the database."""
        current_time = datetime.now().isoformat()
        
        insert_query = """
        INSERT INTO chat_history (session_id, role, content, timestamp)
        VALUES (?, ?, ?, ?);
        """
        self.cursor.execute(insert_query, (session_id, role, content, current_time))
        self.conn.commit()

    def get_recent_messages(self, session_id: str, limit: int = 5) -> List[Dict[str, str]]:
        """
        Retrieves the last 'limit' messages for a specific session.
        Returns messages in the format expected by the LLM (list of {"role": "", "content": ""}).
        """
        select_query = f"""
        SELECT role, content 
        FROM chat_history 
        WHERE session_id = ?
        ORDER BY timestamp DESC 
        LIMIT ?;
        """
        self.cursor.execute(select_query, (session_id, limit))
        
        results = [dict(row) for row in self.cursor.fetchall()]
        return results[::-1]
    def close_connection(self):
        """Safely closes the database connection."""
        self.conn.close()

if __name__ == "__main__":
    memory = MemoryService()
    TEST_ID = "test_session_123"

    print("--- Initializing Test ---")
    memory.add_message(TEST_ID, "user", "Hello Mmathando, I have been feeling anxious today.")
    memory.add_message(TEST_ID, "assistant", "I hear you. Could you tell me more about your feelings?")
    memory.add_message(TEST_ID, "user", "It's the stress from my hackathon team.")
    
    history = memory.get_recent_messages(TEST_ID, limit=3)
    print("\n--- Retrieved History (3 messages) ---")
    print(history)
    
    memory.close_connection()