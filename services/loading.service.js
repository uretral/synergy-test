
let LoadingDom = null;

function Loading(content = '') {
  return `<div class="loading">
      <div class="loading-circular">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none" class="circle"></circle>
        </svg>
        <p>${content}</p></div>
      </div>
    </div>`;
}

function loading(content) {
  Loading(content);
}

loading.close = () => {
  const elements =  document.getElementsByClassName('loading');
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
};

loading.open = () => {
  let genDom = window.document.createElement('div');
  genDom.innerHTML = Loading();
  LoadingDom = genDom.childNodes[0];
  document.body.appendChild(LoadingDom);
};

export default loading;
