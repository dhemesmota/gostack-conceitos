import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333'
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com Físico: IP da máquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Físico: IP da máquina
 */