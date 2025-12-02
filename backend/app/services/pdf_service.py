import pypdf
from pypdf import PdfReader

def extract_text_from_pdf(filename):
    text = ""
    with open(filename, "rb") as file:
        reader = pypdf.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text() or ""
    return text





    

