import pypdf
import io

def extract_text_from_pdf(file_bytes: bytes) -> str:
    """
    Extracts text from a PDF file stream (bytes).
    """
    text = ""
    pdf_file = io.BytesIO(file_bytes)
    
    reader = pypdf.PdfReader(pdf_file)
    for page in reader.pages:
        text += page.extract_text() or ""
        
    return text