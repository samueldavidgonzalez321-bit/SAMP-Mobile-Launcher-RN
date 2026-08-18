import { ServerActionsType } from '../actions/serverActions';
import { ServerType } from '../services/distribution.service';

export type ServerOnlineType = ServerType & {
  online: number;
  slot: number;
  status: boolean;
  loading: boolean;
const serverInitState = {
  servers: [
    {
      id: 1,
      address: '142.132.203.47:11881',
      name: 'New Life Roleplay',
      description: 'aqui comienza tu nueva vida',
      online: 0,
      slot: 1000,
      status: true,
      loading: false,
      sampVersion: '0.3.7',
      show: true,
      version: '1.0',
      icon: '',
      events: [],
      bonus: false,
    }
  ] as ServerOnlineType[],
};

export type ServerStateType = typeof serverInitState;

export const serverReducer = (
  state = serverInitState,
  action: ServerActionsType,
): ServerStateType => {
  switch (action.type) {
    case 'SET_DISTRIBUTION': {
      const serverLists = action.payload.servers.map(el => ({
        ...el,
        online: 0,
        slot: 1000,
        status: false,
        loading: true,
      }));
      return {
        ...state,
        servers: [...serverLists],
      };
    }
    case 'SET_SERVERS': {
      const servers = state.servers.map(el => {
        if (el.id === action.payload.id) {
          return { ...el, ...action.payload };
        } else {
          return el;
        }
      });

      return {
        ...state,
        servers,
      };
    }
    default:
      return state;
  }
};
