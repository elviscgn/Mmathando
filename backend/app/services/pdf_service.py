import pypdf
from pypdf import PDFReader

def extract_text_from_pdf(pdf_path):
    text = ""
    with open(pdf_path, "rb") as file:
        reader = pypdf.PDFReader(file)
        for page in reader.pages:
            text += page.extract_text() or ""
    return text

    

