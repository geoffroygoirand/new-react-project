export const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * actionCreator
 * action pour ajouter un message au chat
 * @param {Object} message l'objet message avec id, text et author
 * @param {String} message.text le body du message
 * @param {number} message.id id du message
 * @param {String} message.author l'auteur du message
 * @returns {Action}
 */
export function actionAddMessage({ id, text, author }) {
  return {
    type: ADD_MESSAGE,
    payload: { id, text, author },
  };
}
