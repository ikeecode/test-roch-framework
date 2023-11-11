/**
 * @name iyoh service
 * This is a test function
 */

// code that is returned to the client (browser)
export default (props) => {
 setTimeout(() => {
  document.getElementById('banner').classList.remove('hidden')
 }, 2000)

   
}

// code that is run on the server
export const onServer =  (path, req) => {
    console.log(path)
    return {name: 'Rawk'}
}

