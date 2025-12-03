from PIL import Image
import pytesseract

# If you're on Windows: uncomment and adjust the path
# pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

def extract_text():
    """
    Extracts text from the given image and returns it as a string.
    """
    image = Image.open("image.png")
    text = pytesseract.image_to_string(image)
    return text
print(extract_text())

# Example usage
# if __name__ == "__main__":
#     image_file = ""   # Replace with your image
#     output = extract_text(image_file)
#     print("Extracted text:\n")
#     print(output)
