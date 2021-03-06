import { WebView } from "tns-core-modules/ui/web-view";
import { View } from "tns-core-modules/ui/core/view";

/* Starting and stopping Appsee monitoring */
export function setDebug(log: boolean): void;
export function start(apiKey: string): void;

/* Controlling video recording */
export function stop(): void;
export function pause(): void;
export function resume(): void;

/* Marking views as sensitive */
export function markViewAsSensitive(view: View): void;
export function unmarkViewAsSensitive(view: View): void;

/* Labeling events and views in Appsee */
export function startScreen(screenName: string): void;
export function addEvent(eventName: string, properties?: object): void;
export function addScreenAction(actionName: string): void;
export function setUserId(userId: string): void;
export function setLocationDescription(description: string): void;

/* Appsee Session Management */
export function finishSession(verifyBackground: boolean, shouldUpload: boolean): void;
export function forceNewSession(): void;
export function upload(): void;

/* Functions related to managing web views */
export function installJavascriptInterface(wv: WebView): void;
