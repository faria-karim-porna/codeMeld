import { EnumRenderingDeviceType } from "../core/enums/EnumRenderingDeviceType";

class BrowserWindowUtil {
  public static GetHeightUptoBottom(id: string): string {
    const elem: HTMLElement | null = document.getElementById(id);
    const height = window.innerHeight - (elem?.getBoundingClientRect().top ?? 0);
    return height + "px";
  }

  public static DeviceRenderCategory = {
    Desktop: [EnumRenderingDeviceType.ExtraLarge],
    Mobile: [EnumRenderingDeviceType.Small, EnumRenderingDeviceType.ExtraSmall],
    Tablet: [EnumRenderingDeviceType.Medium, EnumRenderingDeviceType.Large],
  };

  public static IsCurrentRenderDevice(device: EnumRenderingDeviceType): boolean {
    const deviceWidth: number = window.innerWidth;
    switch (device) {
      case EnumRenderingDeviceType.ExtraSmall:
        return deviceWidth < 576;
      case EnumRenderingDeviceType.Small:
        return deviceWidth >= 576 && deviceWidth < 768;
      case EnumRenderingDeviceType.Medium:
        return deviceWidth >= 768 && deviceWidth < 992;
      case EnumRenderingDeviceType.Large:
        return deviceWidth >= 992 && deviceWidth < 1200;
      case EnumRenderingDeviceType.ExtraLarge:
        return deviceWidth >= 1200;
      default:
        return false;
    }
  }
}

export const Utility = {
  BrowserWindowUtil,
};
