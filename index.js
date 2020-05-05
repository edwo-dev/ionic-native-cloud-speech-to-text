var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Cloud Speech Recognition
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { CloudSpeechToText } from '@ionic-native/cloud-speech-to-text';
 *
 *
 * constructor(private cloudSpeechToText: CloudSpeechToText) { }
 *
 * ...
 *
 *
 * this.cloudSpeechToText.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var CloudSpeechToText = (function (_super) {
    __extends(CloudSpeechToText, _super);
    function CloudSpeechToText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns that plugin has streaming support.
     * @return {boolean} Returns that plugin has streaming support.
     */
    /**
       * Returns that plugin has streaming support.
       * @return {boolean} Returns that plugin has streaming support.
       */
    CloudSpeechToText.prototype.isStreamingAvailable = /**
       * Returns that plugin has streaming support.
       * @return {boolean} Returns that plugin has streaming support.
       */
    function () {
        return true;
    };
    /**
     * Configures plugin.
     * @param {CloudSpeechToTextConfiguration} config Cloud Speech-to-Text configuration options.
     * @return {Promise<void>} Returns a promise that resolves when plugin was initialized.
     */
    /**
       * Configures plugin.
       * @param {CloudSpeechToTextConfiguration} config Cloud Speech-to-Text configuration options.
       * @return {Promise<void>} Returns a promise that resolves when plugin was initialized.
       */
    CloudSpeechToText.prototype.configure = /**
       * Configures plugin.
       * @param {CloudSpeechToTextConfiguration} config Cloud Speech-to-Text configuration options.
       * @return {Promise<void>} Returns a promise that resolves when plugin was initialized.
       */
    function (config) {
        return;
    };
    /**
     * Sets speech context.
     * @param {Array<any>} speechContext Speech context.
     */
    /**
       * Sets speech context.
       * @param {Array<any>} speechContext Speech context.
       */
    CloudSpeechToText.prototype.setSpeechContext = /**
       * Sets speech context.
       * @param {Array<any>} speechContext Speech context.
       */
    function (speechContext) {
        return;
    };
    /**
     * Starts recording microphone input.
     * @return {Promise<void>} Returns a promise that resolves after recording was started.
     */
    /**
       * Starts recording microphone input.
       * @return {Promise<void>} Returns a promise that resolves after recording was started.
       */
    CloudSpeechToText.prototype.startRecording = /**
       * Starts recording microphone input.
       * @return {Promise<void>} Returns a promise that resolves after recording was started.
       */
    function () {
        return;
    };
    /**
     * Stops recording microphone input.
     */
    /**
       * Stops recording microphone input.
       */
    CloudSpeechToText.prototype.stopRecording = /**
       * Stops recording microphone input.
       */
    function () {
        return;
    };
    /**
     * Gets the audio recording as base64 string.
     * @return {Promise<string>} Returns a promise that resolves after audio recording was converted into base64 string.
     */
    /**
       * Gets the audio recording as base64 string.
       * @return {Promise<string>} Returns a promise that resolves after audio recording was converted into base64 string.
       */
    CloudSpeechToText.prototype.getRecording = /**
       * Gets the audio recording as base64 string.
       * @return {Promise<string>} Returns a promise that resolves after audio recording was converted into base64 string.
       */
    function () {
        return;
    };
    /**
     * Recognizes text from an audio base64 encoded string.
     * @param {string} audio Audio input containing intent.
     * @return {Promise<SpeechRecognitionResponse>} Returns a promise containing detect intent response.
     */
    /**
       * Recognizes text from an audio base64 encoded string.
       * @param {string} audio Audio input containing intent.
       * @return {Promise<SpeechRecognitionResponse>} Returns a promise containing detect intent response.
       */
    CloudSpeechToText.prototype.recognize = /**
       * Recognizes text from an audio base64 encoded string.
       * @param {string} audio Audio input containing intent.
       * @return {Promise<SpeechRecognitionResponse>} Returns a promise containing detect intent response.
       */
    function (audio) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * Starts listening to microphone input.
     * @param {string} requestId Request id.
     * @return {Observable<SpeechRecognitionResponse>} Returns a observable containing streaming detect intent response.
     */
    /**
       * Starts listening to microphone input.
       * @param {string} requestId Request id.
       * @return {Observable<SpeechRecognitionResponse>} Returns a observable containing streaming detect intent response.
       */
    CloudSpeechToText.prototype.startListening = /**
       * Starts listening to microphone input.
       * @param {string} requestId Request id.
       * @return {Observable<SpeechRecognitionResponse>} Returns a observable containing streaming detect intent response.
       */
    function (requestId) {
        return;
    };
    /**
     * Stops listening to microphone input.
     */
    /**
       * Stops listening to microphone input.
       */
    CloudSpeechToText.prototype.stopListening = /**
       * Stops listening to microphone input.
       */
    function () {
        return;
    };
    CloudSpeechToText.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], CloudSpeechToText.prototype, "isStreamingAvailable", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], CloudSpeechToText.prototype, "configure", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], CloudSpeechToText.prototype, "setSpeechContext", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CloudSpeechToText.prototype, "startRecording", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CloudSpeechToText.prototype, "stopRecording", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CloudSpeechToText.prototype, "getRecording", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CloudSpeechToText.prototype, "recognize", null);
    __decorate([
        Cordova({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Observable)
    ], CloudSpeechToText.prototype, "startListening", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CloudSpeechToText.prototype, "stopListening", null);
    /**
     * @name Cloud Speech Recognition
     * @description
     * This plugin does something
     *
     * @usage
     * ```typescript
     * import { CloudSpeechToText } from '@ionic-native/cloud-speech-to-text';
     *
     *
     * constructor(private cloudSpeechToText: CloudSpeechToText) { }
     *
     * ...
     *
     *
     * this.cloudSpeechToText.functionName('Hello', 123)
     *   .then((res: any) => console.log(res))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     */
    CloudSpeechToText = __decorate([
        Plugin({
            pluginName: 'CloudSpeechToText',
            plugin: 'cordova-plugin-cloud-speech-to-text',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'cordova.plugins.CloudSpeechToText',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://betacut@bitbucket.org/betacut/cordova-plugin-cloud-speech-to-text.git',
            // the github repository URL for the plugin
            install: '',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: [],
            // OPTIONAL the plugin requires variables
            platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], CloudSpeechToText);
    return CloudSpeechToText;
}(IonicNativePlugin));
export { CloudSpeechToText };
//# sourceMappingURL=index.js.map