import APIClient from "./APIClient";

/**
 * Класс для удаления записи с помощью API-клиента.
 */
class DeletePost {
    /**
     * Удаляет запись по ее идентификатору.
     *
     * @param {number} id - Идентификатор записи, которую нужно удалить.
     * @returns {Promise<boolean>} - Обещание, которое принимает значение true, если запись успешно удалена, 
     *                               или false в противном случае.
     */
    static async deletePost(id) {
        try {
            const response = await APIClient.delete(`/posts/${id}`);
            if (response.status === 200) return true;
            return false;
        } catch (e) {
            console.error('Ошибка при удалении поста:', e);
        }
    }
}

export default DeletePost;

