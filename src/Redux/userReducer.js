const TOGGLE_AUTH = 'TOGGLE-AUTH', SET_USER_COLLECTION = 'SET_USER_COLLECTION', COUNT_BALANCE = 'COUNT-BALANCE';

let initialState = {
    user: {
        name: 'Nazar Saaliev',
        picture: 'https://igate.com.ua/upload/photo/0001/0001/0252/2705/65.jpg',
        login: 'saal.nazar@mail.com',
        collection: [
            {
                description: "Lunafreya Nox Fleuret (ルナフレーナ・ノックス・フルーレ Runafurēna Nokkusu Furūre, ''Lunafrena Nox Fleuret'' in the Japanese version), also known simply as Luna (ルーナ Rūna), is the main heroine in Final Fantasy XV and one of the two main characters in Kingsglaive: Final Fantasy XV. A former princess of Tenebrae, she is a captive of the Niflheim Empire. Able to talk to the gods, Luna is the youngest Oracle in history. Despite it being under Niflheim's control, Tenebrae has some autonomy thanks to her. She is the younger sister of Ravus Nox Fleuret, and Prince Noctis's betrothed. Luna is the daughter of the Queen of Tenebrae, Sylva Nox Fleuret. She has two dogs: the white Pryna and the black Umbra. Luna is the presence that supports Noctis for him to fulfill his destiny. Luna and Noctis are childhood friends but their feelings for each other are complicated, as both must uphold the burdens that come with their status.",
                id: "b7bd48a2-59dc-40ad-103d-08d6afcab3e2",
                name: "Lunafreya Nox Fleuret",
                origin: "Final Fantasy 15",
                picture: "https://mooglestorage.blob.core.windows.net/images/Character-b7bd48a2-59dc-40ad-103d-08d6afcab3e21.png",
                race: "Human",
            },
            {
                description: "Noctis Lucis Caelum (ノクティス・ルシス・チェラム Nokutisu Rushisu Cheramu), ''Noct'' (ノクト Nokuto) for short, is the playable character and main protagonist of Final Fantasy XV. He is the Crown Prince and heir to the throne of Lucis, the kingdom to have control over the Crystal. Thus, he can wield the power of Lucian kings. He was first announced for the cancelled game Final Fantasy Versus XIII, which eventually transformed into the Final Fantasy XV Universe.",
                id: "1154fff6-f8a6-4beb-103e-08d6afcab3e2",
                name: "Noctis Lucis Caelum",
                origin: "Final Fantasy 15",
                picture: "https://mooglestorage.blob.core.windows.net/images/Character-1154fff6-f8a6-4beb-103e-08d6afcab3e21.jpg",
                race: "Human",
            }
        ],
        userId: '101',
        balance: '1280',
    },
    isAuth: true,
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case SET_USER_COLLECTION:
            return {
                ...state,
                user: {
                    ...state.user,
                    collection: [...state.user.collection, action.collItem]
                }
            }
        case COUNT_BALANCE:
            return {
                ...state,
                user: {
                    ...state.user,
                    balance: state.user.balance - action.price,
                }
            }
        default:
            return state;
    }
}

export const toggleAuth = (isAuth) => ({type: TOGGLE_AUTH, isAuth});
export const setUserCollection = (collItem) => ({type: SET_USER_COLLECTION, collItem});
export const countBalance = (price) => ({type: COUNT_BALANCE, price});

export const setToCollectionMid = (item) => (dispatch) => {
    dispatch(setUserCollection(item));
}

export default userReducer;