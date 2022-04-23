import {
  ADD_MESSAGE,
} from '../actions/chatActions';
import { getNewId } from '../tools/utils';

const exampleMessages = [
  { id: 1, author: 'foo', body: 'Non mais n’exagérez pas non plus! J’vous demande quand même pas de manger des briques! Perceval le Galois en tout cas tout le monde s’accorde à dire que c’est une tanche et ça c’est pas une légende!' },
  { id: 2, author: 'foo', body: 'Non mais n’exagérez pas non plus! J’vous demande quand même pas de manger des briques! Perceval le Galois en tout cas tout le monde s’accorde à dire que c’est une tanche et ça c’est pas une légende!' },
  { id: 3, author: 'foo', body: 'Non mais n’exagérez pas non plus! J’vous demande quand même pas de manger des briques! Perceval le Galois en tout cas tout le monde s’accorde à dire que c’est une tanche et ça c’est pas une légende!' },
];

const initialState = {
  messages: [],
};

export default (state = initialState, { type, payload }) => {
  // console.log('chatReducer', { type, payload });
  switch (type) {
    case ADD_MESSAGE:
      // BAD ! avec push on modifie notre ancien state, et on ne doit surtout pas le faire
      // BAD state.messages.push({ author: 'foo', body: payload });
      return {
        ...state, // spread operator https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        messages: [
          ...state.messages, // permet d'injecter tout mes anciens messages avant le nouveau
          {
            id: payload.id, // nous donne le nouvel id, (maxId + 1)
            author: payload.author,
            body: payload.text, // valeur de l'input => texte du message
          },
        ],
      };

    default:
      return state;
  }
};
