import UIkit from 'uikit/dist/js/uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)
export default ({ app }, inject) => {
  inject('UIkit', UIkit)
}
