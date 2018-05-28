// create a link object and return it
let link = (text, url) => {
  return {text: text, url: url}
}

const links = [link('home.','index.html'),link('about me.','about.html'),link('my portfolio.','portfolio.html'),link('my r&eacute;sum&eacute;.','resume.html')];

$(() => {
  addMenu();
  addHeader();
});

// add icon to the page
let addMenu = () => {
  // click handler for menu icon animation
  let menuClick = () => {
    $('#menu-icon').toggleClass('change');
    $('#menu #menuBody').toggleClass('display');
    $('#menu').toggleClass('display');
  }

  // add menu icon to menu
  let menuIcon = $('<div></div>').attr('id','menu-icon');
  let menuHeader = $('<div></div>').addClass('menuHeader');
  menuHeader.append(menuIcon);

  // create bars
  let bar1 = $('<div></div>').addClass('bar1');
  let bar2 = $('<div></div>').addClass('bar2');
  let bar3 = $('<div></div>').addClass('bar3');

  // add bars to menu
  menuIcon
    .append(bar1)
    .append(bar2)
    .append(bar3);

  // add title
  menuHeader.append($('<h3>navigate.</h3>').addClass('title'));

  // add menu header
  $('#menu').append(menuHeader);

  // add menu
  let menuBody = $('<ul></ul>').attr('id','menuBody');
  $('#menu').append(menuBody);

  //populate menu
  links.map((link, i)=>{
    let linkElement = $('<a></a>').html(link.text).attr('href',link.url);

    if(link.url === getFilename())
      linkElement.addClass('active');

    menuBody.append(linkElement);

    if(i !== links.length -1)
      menuBody.append($('<br>'));
  });
  
  // bind menuClick to the icon
  $('#menu-icon').click(menuClick);
}

let addHeader = () => {
  let titleText = 'william findlay.'
  let filename = getFilename();

  switch(filename){
    case 'index.html':
      titleText = 'william findlay.';
      break;
    case 'about.html':
      titleText = 'about me.';
      break;
    case 'portfolio.html':
      titleText = 'my portfolio.';
      break;
    case 'resume.html':
      titleText = 'my r&eacute;sum&eacute;.';
      break;
    case '404.html':
      console.log('settting to oops');
      titleText = 'oops.';
      break;
    case '':
      titleText = 'william findlay.';
      break;
    default:
      titleText = 'william findlay.';
      break;
  }

  let title = $('<h1></h1>').append($('<a></a>').html(titleText).attr('href',getFilename()))

  $('#header').append(title).append($('<hr>'));
}

// get name of file to set link to active
let getFilename = () => {
    let pagePathName= window.location.pathname;
    return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}
