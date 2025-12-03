import json
import os


class MemoryService:
    def __init__(self, file_path="chat_history.json"):
        self.file_path = file_path

        # Create the file if it does not exist
        if not os.path.exists(self.file_path):
            with open(self.file_path, "w") as f:
                json.dump([], f)

    def add_message(self, role, content):
        """Add a new message to the chat history."""
        # Read existing messages
        with open(self.file_path, "r") as f:
            messages = json.load(f)

        # Append new message
        messages.append({"role": role, "content": content})

        # Save updated list back to file
        with open(self.file_path, "w") as f:
            json.dump(messages, f, indent=4)

    def get_recent_messages(self, limit=5):
        """Return the most recent chat messages."""
        with open(self.file_path, "r") as f:
            messages = json.load(f)
        return messages[-limit:]

