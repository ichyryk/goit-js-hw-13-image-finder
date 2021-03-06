import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const modalWindow = basicLightbox
    .create(
      `<img class="lightbox__image" src=${event.target.dataset.source} alt="" />`,
      {
        closable: true,
      },
    )
    .show();
}
export default openModal;
