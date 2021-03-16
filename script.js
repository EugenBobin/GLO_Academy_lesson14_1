'use strict';

const DomElement = {

  text: '',
  selector: '',
  height: '', 
  width: '', 
  bg: '', 
  fontSize: '',

  createElem: function() {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = this.text;
    if (this.selector[0] === '.') {
      this.selector = this.selector.substring(1);
      newDiv.classList.add(this.selector);
    } else if (this.selector[0] === '#') {
      this.selector = this.selector.substring(1);      
      newDiv.id = this.selector;
    }
    newDiv.style.height = this.height + 'px';
    newDiv.style.width = this.width + 'px';
    newDiv.style.fontSize = this.fontSize + 'px';
    newDiv.style.backgroundColor = this.bg;
    return newDiv;
  }

};
// привязываем элементы страницы
const createBtn = document.querySelector('.create-btn'),
      clearBtn = document.querySelector('.clear-btn'),
      createdElems = document.querySelector('.created-elements'),
      formText = document.querySelector('.input-text'),
      formIdent = document.querySelector('.input-ident'),
      formHeight = document.querySelector('.input-height'),
      formWidth = document.querySelector('.input-width'),
      formFontSize = document.querySelector('.input-font-size'),
      formBackground = document.querySelector('.input-color');



// проверка введенного текста в поле Идентификатор, должно начинаться с . или #
formIdent.addEventListener('input', () => {
//  console.log(formIdent.value, ' - ', formIdent.value.length);
  if (formIdent.value.length === 1) {
    if (formIdent.value !== '.' && formIdent.value !== '#') {
      formIdent.value = '';
    }
  }
});

// создаем новый блок div при нажатии кнопки Create
createBtn.addEventListener('click',() => {

  const newDomElem = Object.create(DomElement);
  newDomElem.text = formText.value;
  newDomElem.selector = formIdent.value;
  newDomElem.height = formHeight.value;
  newDomElem.width = formWidth.value;
  newDomElem.fontSize = formFontSize.value;
  newDomElem.bg = formBackground.value;

  const newDiv = newDomElem.createElem();
  createdElems.append(newDiv);
});

// удаляем все блоки div и очищаем поля ввода при нажатии кнопки Clear
clearBtn.addEventListener('click',() => {
  formText.value = 'lorem ipsum';
  formIdent.value = '';
  formHeight.value = 30;
  formWidth.value = 300;
  formFontSize.value = 16;
  formBackground.value = '#ffffff';

  createdElems.innerHTML = '';
});