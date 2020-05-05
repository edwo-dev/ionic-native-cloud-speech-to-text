import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface CloudSpeechToTextConfiguration {
    apiKey?: string;
    languageCode?: string;
    maxAlternatives?: number;
    audioEncoding?: string;
    sampleRate?: number;
    bufferSize?: number;
}
export interface SpeechRecognitionResponse {
    requestId: string;
    results: Array<any>;
    isFinal: boolean;
}
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
export declare class CloudSpeechToText extends IonicNativePlugin {
    /**
     * Returns that plugin has streaming support.
     * @return {boolean} Returns that plugin has streaming support.
     */
    isStreamingAvailable(): boolean;
    /**
     * Configures plugin.
     * @param {CloudSpeechToTextConfiguration} config Cloud Speech-to-Text configuration options.
     * @return {Promise<void>} Returns a promise that resolves when plugin was initialized.
     */
    configure(config: CloudSpeechToTextConfiguration): Promise<void>;
    /**
     * Sets speech context.
     * @param {Array<any>} speechContext Speech context.
     */
    setSpeechContext(speechContext: Array<any>): void;
    /**
     * Starts recording microphone input.
     * @return {Promise<void>} Returns a promise that resolves after recording was started.
     */
    startRecording(): Promise<void>;
    /**
     * Stops recording microphone input.
     */
    stopRecording(): void;
    /**
     * Gets the audio recording as base64 string.
     * @return {Promise<string>} Returns a promise that resolves after audio recording was converted into base64 string.
     */
    getRecording(): Promise<string>;
    /**
     * Recognizes text from an audio base64 encoded string.
     * @param {string} audio Audio input containing intent.
     * @return {Promise<SpeechRecognitionResponse>} Returns a promise containing detect intent response.
     */
    recognize(audio: string): Promise<SpeechRecognitionResponse>;
    /**
     * Starts listening to microphone input.
     * @param {string} requestId Request id.
     * @return {Observable<SpeechRecognitionResponse>} Returns a observable containing streaming detect intent response.
     */
    startListening(requestId: string): Observable<SpeechRecognitionResponse>;
    /**
     * Stops listening to microphone input.
     */
    stopListening(): void;
}
