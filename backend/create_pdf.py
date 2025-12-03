from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 15)
        self.cell(0, 10, 'General Hospital - Patient Summary', 0, 1, 'C')
        self.ln(10)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

def create_medical_pdf(filename="medical_test.pdf"):
    pdf = PDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    
    content = """
    Patient Name: John Doe
    Date: 2023-10-27
    
    Subject: Lab Results Review
    
    Clinical Notes:
    The patient presented with fatigue and mild dizziness. Blood work was ordered to investigate potential causes.
    
    Results:
    1. Hemoglobin: 11.5 g/dL (Low). Reference range: 13.5-17.5 g/dL.
    2. Ferritin: 15 ng/mL (Low). Indicates iron deficiency.
    3. Vitamin D: 20 ng/mL (Insufficient).
    
    Diagnosis:
    Iron Deficiency Anemia.
    
    Recommendations:
    - Begin oral iron supplementation (Ferrous Sulfate 325mg daily).
    - Increase dietary intake of iron-rich foods (red meat, spinach, beans).
    - Follow up blood work in 3 months to monitor hemoglobin levels.
    """
    
    pdf.multi_cell(0, 10, content)
    pdf.output(filename)
    print(f"Created {filename}")

if __name__ == "__main__":
    create_medical_pdf()