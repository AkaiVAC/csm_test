import React, { useReducer, createContext } from 'react';
import { ImageCanvasAction, ImageCanvasTool } from '../../../types/enums';

const initialCanvasState: ImageCanvasState = {
    history: [],
    activeTool: ImageCanvasTool.Add,
    cursorType: 'crosshair',
    points: [],
    pointType: 'object',
    zoomLevel: 1.5,
    isPanning: false,
    maskOpacity: 0.5,
};

const canvasReducer = (
    state: ImageCanvasState,
    action: ImageCanvasActionType
): ImageCanvasState => {
    switch (action.type) {
        case ImageCanvasAction.SET_HISTORY:
            return { ...state, history: action.payload };
        case ImageCanvasAction.SET_ACTIVE_TOOL:
            return { ...state, activeTool: action.payload };
        case ImageCanvasAction.SET_CURSOR_TYPE:
            return { ...state, cursorType: action.payload };
        case ImageCanvasAction.SET_POINTS:
            return { ...state, points: action.payload };
        case ImageCanvasAction.SET_POINT_TYPE:
            return { ...state, pointType: action.payload };
        case ImageCanvasAction.SET_ZOOM_LEVEL:
            return { ...state, zoomLevel: action.payload };
        case ImageCanvasAction.SET_IS_PANNING:
            return { ...state, isPanning: action.payload };
        case ImageCanvasAction.SET_MASK_OPACITY:
            return { ...state, maskOpacity: action.payload };
        default:
            return state;
    }
};

export const CanvasContext = createContext<CanvasContextType | undefined>(
    undefined
);

export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(canvasReducer, initialCanvasState);

    return (
        <CanvasContext.Provider value={{ state, dispatch }}>
            {children}
        </CanvasContext.Provider>
    );
};
