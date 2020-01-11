import 'babel-polyfill';
import { api } from "./api";

localStorage.setItem('token', 'SS9DNa7B6OaONIRIRPcnIiTDVRdDGS3-mdEy');

function handleSomeError(error) {
    console.warn(error.message);
}

// const getUsers = async () => {
//     try {
//         const response = await axios.get( 'https://gorest.co.in/public-api/users', {
//             headers: {
//                 Authorization: 'Bearer SS9DNa7B6OaONIRIRPcnIiTDVRdDGS3-mdEy',
//             },
//         });
//
//         const data = response.data;
//
//         if (!data._meta.success) {
//             handleSomeError(response.data.result);
//             return null;
//         }
//
//         return data.result;
//     } catch (error) {
//         handleSomeError(error);
//     }
// };
//
// const deleteUserById = async (id) => {
//     try {
//         const response = await axios.delete( `https://gorest.co.in/public-api/users/${id}`, {
//             headers: {
//                 Authorization: 'Bearer SS9DNa7B6OaONIRIRPcnIiTDVRdDGS3-mdEy',
//             },
//         });
//
//         const data = response.data;
//
//         if (!data._meta.success) {
//             handleSomeError(response.data.result);
//             return null;
//         }
//
//         return data;
//     } catch (error) {
//         handleSomeError(error);
//     }
// };

const getUsers = async () => {
    const { response, error } = await api.get( '/users');

    if (error) {
        handleSomeError(error);
        return null;
    }

    return response.result;
};

const deleteUserById = async (id) => {
    const { response, error } = await api.delete( `/users/${id}`);

    if (error) {
        handleSomeError(error);
        return null;
    }

    return response;
};

const deleteFirstUser = async () => {
    const users = await getUsers();

    if (users) {
        const deleteResponse = await deleteUserById(users[0].id);

        console.log(deleteResponse._meta.success);
    }
};

deleteFirstUser();
