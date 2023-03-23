import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $getImageFromIconCode: (iconCode: string) => string;
    $replaceIcons: (string: string) => string;
  }
}
