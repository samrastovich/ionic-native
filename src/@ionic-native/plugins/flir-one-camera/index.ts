import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  IonicNativePlugin,
} from '@ionic-native/core';
import { Observable } from 'rxjs';

export enum ComunicationInterface {
  USB,
  NETWORK,
  FIREWIRE,
  EMULATOR,
  BLUETOOTH,
  EBUS,
  USBHSI,
  LIGHTNING,
  INTEGRATED,
}

export enum CameraType {
  GENERIC,
  FLIR_ONE,
}

export interface Identity {
  communicationInterface: ComunicationInterface;
  cameraType: CameraType;
  deviceId: string;
}

/**
 * @name @ionic-native/ Flir One Camera
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { FlirOneCamera } from '@ionic-native/flir-one-camera/ngx';
 *
 *
 * constructor(private flirOneCamera: FlirOneCamera) { }
 *
 * ...
 *
 *
 * this.flirOneCamera.startDiscovery().subscribe(res => {
 *  console.log(res);
 * })
 *
 * ```
 */
@Plugin({
  pluginName: '@ionic-native/FlirOneCamera',
  plugin: 'cordova-flirone-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.FlirOneCamera', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/samrastovich/cordova-flirone-plugin', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class FlirOneCamera extends IonicNativePlugin {
  /**
   * Starts dicovery of a Flir device
   * @return {Observable<Identity>} Returns an identity every time one is round
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 1,
  })
  startDiscovery(): Observable<Identity> {
    return;
  }

  /**
   * Stops dicovery of a Flir device
   * @return {Observable<any>} Returns success when it successfully stopped discovering
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 1,
  })
  stopDiscovery(): Observable<any> {
    return;
  }

  /**
   * Connects to a Flir device
   * @return {Observable<any>} Emits every time the connection status changes
   */
  @Cordova({
    observable: true,
    successIndex: 1,
    errorIndex: 2,
  })
  connect(identity: Identity): Observable<any> {
    return;
  }

  /**
   * Starts a stream of thermal image data
   * @return {Observable<any>} Emits every time the connection status changes
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 1,
  })
  startStream(): Observable<any> {
    return;
  }
}
