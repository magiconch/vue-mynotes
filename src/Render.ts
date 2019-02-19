import { IRender } from "./IRender";
import { _SvgRender } from "./renders/svg/_SvgRender";
import { _CanvasRender } from "./renders/canvas/_CanvasRender";

export default abstract class Render implements IRender {
    public static createSvgRender(element: SVGSVGElement): Render {
        return new _SvgRender(element);
    }
    public static createCanvasRender(element: HTMLCanvasElement): Render {
        return new _CanvasRender(element);
    }

    public abstract drawCircle(x: number, y: number, radius: number): void;
}