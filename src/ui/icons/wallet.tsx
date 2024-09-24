import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export const GoldWallet = ({ size }: { size: number }) => {

  const svg = `<svg width="692" height="584" viewBox="0 0 692 584" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M636.697 166.784C634.807 166.665 632.75 166.666 630.62 166.667L630.087 166.667H546.47C477.547 166.667 418.573 220.919 418.573 291.667C418.573 362.413 477.547 416.667 546.47 416.667H630.087H630.62C632.75 416.667 634.807 416.67 636.697 416.55C664.693 414.78 689.45 392.873 691.533 362.273C691.67 360.267 691.667 358.103 691.667 356.1V355.557V227.778V227.234C691.667 225.229 691.67 223.066 691.533 221.06C689.45 190.46 664.693 168.552 636.697 166.784ZM539.057 325C556.8 325 571.183 310.077 571.183 291.667C571.183 273.257 556.8 258.333 539.057 258.333C521.313 258.333 506.927 273.257 506.927 291.667C506.927 310.077 521.313 325 539.057 325Z" fill="url(#paint0_linear_62_11)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M630.597 466.667C635.567 466.537 639.33 471.14 637.98 475.927C631.29 499.673 620.667 519.917 603.627 536.96C578.68 561.903 547.047 572.973 507.967 578.23C469.993 583.333 421.473 583.333 360.213 583.333H289.787C228.528 583.333 180.006 583.333 142.033 578.23C102.952 572.973 71.3203 561.903 46.3747 536.96C21.4293 512.013 10.3587 480.38 5.10468 441.3C-0.000982761 403.327 -0.000651561 354.807 1.51053e-05 293.547V289.787C-0.000651561 228.528 -0.000982761 180.006 5.10468 142.033C10.3587 102.952 21.4293 71.3203 46.3747 46.3747C71.3203 21.4294 102.952 10.3587 142.033 5.10468C180.006 -0.000982761 228.527 -0.000651561 289.787 1.51053e-05H360.213C421.473 -0.000651561 469.993 -0.000982761 507.967 5.10468C547.047 10.3587 578.68 21.4294 603.627 46.3747C620.667 63.4173 631.287 83.658 637.98 107.406C639.33 112.192 635.567 116.796 630.597 116.667L546.467 116.667C451.913 116.667 368.57 191.364 368.57 291.667C368.57 391.97 451.913 466.667 546.467 466.667H630.597ZM166.667 416.667C152.86 416.667 141.667 405.473 141.667 391.667V191.667C141.667 177.86 152.86 166.667 166.667 166.667C180.474 166.667 191.667 177.86 191.667 191.667V391.667C191.667 405.473 180.474 416.667 166.667 416.667Z" fill="url(#paint1_linear_62_11)"/>
                <defs>
                <linearGradient id="paint0_linear_62_11" x1="555.12" y1="166.667" x2="555.12" y2="416.667" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E9AE5F"/>
                <stop offset="1" stop-color="#E4A03F"/>
                </linearGradient>
                <linearGradient id="paint1_linear_62_11" x1="319.129" y1="0" x2="319.129" y2="583.333" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E9AE5F"/>
                <stop offset="1" stop-color="#E4A03F"/>
                </linearGradient>
                </defs>
                </svg>
              `

  return <SvgXml xml={svg} width={size} height={size} />;
};

export const SilverWallet = ({ size }: { size: number }) => {

  const svg = `<svg width="692" height="584" viewBox="0 0 692 584" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M636.697 166.784C634.807 166.665 632.75 166.666 630.62 166.667L630.087 166.667H546.47C477.547 166.667 418.573 220.919 418.573 291.667C418.573 362.413 477.547 416.667 546.47 416.667H630.087H630.62C632.75 416.667 634.807 416.67 636.697 416.55C664.693 414.78 689.45 392.873 691.533 362.273C691.67 360.267 691.667 358.103 691.667 356.1V355.557V227.778V227.234C691.667 225.229 691.67 223.066 691.533 221.06C689.45 190.46 664.693 168.552 636.697 166.784ZM539.057 325C556.8 325 571.183 310.077 571.183 291.667C571.183 273.257 556.8 258.333 539.057 258.333C521.313 258.333 506.927 273.257 506.927 291.667C506.927 310.077 521.313 325 539.057 325Z" fill="url(#paint0_linear_62_11)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M630.597 466.667C635.567 466.537 639.33 471.14 637.98 475.927C631.29 499.673 620.667 519.917 603.627 536.96C578.68 561.903 547.047 572.973 507.967 578.23C469.993 583.333 421.473 583.333 360.213 583.333H289.787C228.528 583.333 180.006 583.333 142.033 578.23C102.952 572.973 71.3203 561.903 46.3747 536.96C21.4293 512.013 10.3587 480.38 5.10468 441.3C-0.000982761 403.327 -0.000651561 354.807 1.51053e-05 293.547V289.787C-0.000651561 228.528 -0.000982761 180.006 5.10468 142.033C10.3587 102.952 21.4293 71.3203 46.3747 46.3747C71.3203 21.4294 102.952 10.3587 142.033 5.10468C180.006 -0.000982761 228.527 -0.000651561 289.787 1.51053e-05H360.213C421.473 -0.000651561 469.993 -0.000982761 507.967 5.10468C547.047 10.3587 578.68 21.4294 603.627 46.3747C620.667 63.4173 631.287 83.658 637.98 107.406C639.33 112.192 635.567 116.796 630.597 116.667L546.467 116.667C451.913 116.667 368.57 191.364 368.57 291.667C368.57 391.97 451.913 466.667 546.467 466.667H630.597ZM166.667 416.667C152.86 416.667 141.667 405.473 141.667 391.667V191.667C141.667 177.86 152.86 166.667 166.667 166.667C180.474 166.667 191.667 177.86 191.667 191.667V391.667C191.667 405.473 180.474 416.667 166.667 416.667Z" fill="url(#paint1_linear_62_11)"/>
                <defs>
                <linearGradient id="paint0_linear_62_11" x1="555.12" y1="166.667" x2="555.12" y2="416.667" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B5B5BF"/>
                <stop offset="1" stop-color="#858593"/>
                </linearGradient>
                <linearGradient id="paint1_linear_62_11" x1="319.129" y1="0" x2="319.129" y2="583.333" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B5B5BF"/>
                <stop offset="1" stop-color="#858593"/>
                </linearGradient>
                </defs>
                </svg>
              `
  return <SvgXml xml={svg} width={size} height={size} />;

}