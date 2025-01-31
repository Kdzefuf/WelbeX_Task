import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для обновления информации о пользователе.
 * @class PutUsersData
 */
class PutUserData {
  /**
   * Обновляет информацию о пользователе на основе предоставленного ID и данных.
   * @function
   * @async
   * @static
   * @param {string} id - ID пользователя.
   * @param {object} changes - Объект с изменениями данных пользователя.
   * @returns {Promise<object>} Объект, содержащий обновлённые данные пользователя.
   * @throws {Error} В случае ошибки возвращает ошибку или выводит сообщение в консоль.
   */
  static async updateUser(token, changes) {
    try {
      console.log(changes, token);
      const response = await APIClient.put(`/users/${token}`, changes);
      if (response.status === 200) return true;
      return false;
    } catch (e) {
      console.error(e);
    }
  }
}

export default PutUserData;
