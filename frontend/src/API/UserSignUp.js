import APIClient from "./APIClient";

/**
 * Класс содержащий API для выполнения операций, связанных с регистрацией пользователя
 * @class
 */
class UserSignUp {
  /**
   * Функция для регистрации пользователя в системе
   * @function
   * @async
   * @static
   * @param {string} email - Электронная почта пользователя
   * @param {string} username - Имя пользователя
   * @param {string} password - Пароль пользователя
   * @returns {object|null} Возвращает данные пользователя при успешной регистрации, иначе null
   * @throws Выбрасывает ошибку в случае неудачного запроса
   */
  static async register(email, username, password) {
    try {
      const response = await APIClient.post('/register', {
        email,
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('userData', JSON.stringify(response.data));
        return response.data;
      } else {
        console.error('Не удалось выполнить регистрацию. Статус:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Ошибка при выполнении регистрации:', error);
      throw error;
    }
  }
}

export default UserSignUp;