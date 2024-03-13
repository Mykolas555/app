export const postUserItem = async (newExpense) => {
    try {
        const userToken = localStorage.getItem('UserToken');
        const userId = localStorage.getItem('UserId');
        const dataToSend = JSON.stringify(newExpense)
        console.log('Data before request:',dataToSend);
        const URLTOFETCH = (`https://shopinglistapi.onrender.com/api/v1/shl/${userId}/items`)
        console.log(URLTOFETCH)
        const response = await fetch(`https://shopinglistapi.onrender.com/api/v1/shl/${userId}/items`, {
            method: 'POST',
            body: dataToSend,
            headers: {
                'Authorization': `Bearer ${userToken}`,
            },
            
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error(errorData);
            throw new Error('Failed to create a new item');
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
