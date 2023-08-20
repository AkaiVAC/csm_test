declare global {
    type ThemeOptions = {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            background: string;
            border: string;
            success: string;
            danger: string;
        };
        fonts: {
            main: string;
            heading: string;
        };
        sizes: {
            mobile: number;
            tablet: number;
            monitor: number;
        };
    };

    type IconVariant = 'outlined' | 'flat' | 'circle' | 'text';
    type NavVariant = 'horizontal' | 'vertical';
    type DividerVariant = 'horizontal' | 'vertical';
    type ButtonVariant = 'flat' | 'text' | 'success' | 'sidebar' | 'danger';
    type PointVariant = 'object' | 'background';

    type ImagePoint = {
        x: number;
        y: number;
        type: PointVariant;
    };

    type ImageCanvasState = {
        history: Array<Array<ImagePoint>>;
        activeTool: ImageAction;
        cursorType: string;
        points: Array<ImagePoint>;
        pointType: PointVariant;
        zoomLevel: number;
        isPanning: boolean;
        maskOpacity: number;
    };

    type ImageCanvasActionType =
        | {
              type: import('./enums').ImageCanvasAction.SET_HISTORY;
              payload: Array<Array<ImagePoint>>;
          }
        | {
              type: import('./enums').ImageCanvasAction.SET_ACTIVE_TOOL;
              payload: ImageAction;
          }
        | {
              type: import('./enums').ImageCanvasAction.SET_CURSOR_TYPE;
              payload: string;
          }
        | {
              type: import('./enums').ImageCanvasAction.SET_POINTS;
              payload: Array<ImagePoint>;
          }
        | {
              type: import('./enums').ImageCanvasAction.SET_POINT_TYPE;
              payload: PointVariant;
          }
        | {
              type: import('./enums').ImageCanvasAction.SET_ZOOM_LEVEL;
              payload: number;
          }
        | {
              type: import('./enums').ImageCanvasAction.SET_IS_PANNING;
              payload: boolean;
          }
        | {
              type: import('./enums').ImageCanvasAction.SET_MASK_OPACITY;
              payload: number;
          };

    type CanvasContextType = {
        state: ImageCanvasState;
        dispatch: Dispatch<ImageCanvasActionType>;
    };
    type DeviceContextType = {
        deviceType: import('./enums').DeviceType;
        deviceWidth: number;
    };
}
export {};
