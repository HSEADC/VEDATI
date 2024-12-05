// тизер
import './index.css'

if (['/index.html', '/about.html'].includes(window.location.pathname)) {
  import('./formHandler.js').then(({ handleForm }) => handleForm())
}
