let lang;
const defaultLang = 'en';
const Language = {
  'en': {
    'login': {
      'choose_lang': "Choose country",
      'nickname': "What's your nickname?"
    },
    'chat': {
      'title': "Chat Pinturichitrillo",
      'participants': {
        'single': "there's 1 participant",
        'multiple': "there are %NUMBER% participants"
      },
      'is_writing': 'is typing',
      'type_here': "Type here..."
    }    
  },
  'es': {
    'login': {
      'choose_lang': "Escoge país",
      'nickname': "¿Cuál es tu nombre?"
    },
    'chat': {
      'title': "Chat Pinturichitrillo",
      'participants': {
        'single': "hay 1 participante",
        'multiple': "hay %NUMBER% participantes"
      },
      'is_writing': 'está escribiendo',
      'type_here': "Escribe aquí..."
    }
  }
}

function initLanguage() {
  // Temp manual translation handler
  let chooseLang = $('.chooseLanguage');
  let nickname = $('.login .form .title');
  let typeHerePlaceholder = $('.chat .inputMessage');


  // Set translated texts
  chooseLang.text(lang.login.choose_lang);
  nickname.text(lang.login.nickname);
  typeHerePlaceholder.attr('placeholder', lang.chat.type_here);
}

function setLanguage(language) {
  lang = Language[language];
  initLanguage();
}

setLanguage(defaultLang);