from deep_translator import GoogleTranslator

SA_LANG_CODES = {
    "zulu": "zu",
    "sepedi": "nso",  
    "afrikaans": "af",
    "english": "en",
    'swahili':'sw'
}

class TranslationService:
    def __init__(self):
        pass

    def translate_to_english(self, text:str, source_lang:str):
        if source_lang =='en':
            return text
        try:
            eng_trans = GoogleTranslator(source=source_lang,target='en')
            result = eng_trans.translate(text)
            return result

        except Exception as e:
            print(f"Translation to English failed for lang {source_lang}: {e}")
            return text
    
    def translate_from_english(self,text:str,target_lang:str):

        if target_lang == 'en':
            return text

        try:
            final_trans = GoogleTranslator(source='en', target=target_lang)
            result = final_trans.translate(text)
            return result
        except Exception as e:
            print(f"Translation from English failed for lang {target_lang}: {e}")
            return text
        

