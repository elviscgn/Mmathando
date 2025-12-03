from PIL import Image
import pytesseract



def extract_text():
    """
    Extracts text from the given image and returns it as a string.
    """
    image = Image.open("image.png")
    text = pytesseract.image_to_string(image)
    return text
print(extract_text())


