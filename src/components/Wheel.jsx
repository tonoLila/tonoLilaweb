import React, { useState } from "react";
import { motion } from "framer-motion";
import IconWheel from "@components/IconWheel";
import styles from "@styles/wheel.module.css";
const Wheel = ({ currentSection, onPrev, onNext, wheelActive }) => {
  const [angle, setAngle] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (direction) => {
    const rotationDirection = direction === 2 ? -40 : 40;
    setAngle(angle + rotationDirection);
    setIsActive(true);
  };

  const handleTransitionEnd = () => {
    setIsActive(false);
  };

  const handleScroll = (event) => {
    const delta = event.deltaY;
    const rotationDirection = delta > 0 ? -40 : 40;
    if (delta > 0) {
      onNext();
    } else if (delta < 0) {
      onPrev();
    }
    setAngle(angle + rotationDirection);
    setIsActive(true);
  };

  return (
    <motion.div
      id="wheel"
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
    >
      <svg
        className={styles.wheel}
        onWheel={handleScroll}
        width="80%"
        height="80%"
        viewBox="0 -700 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          clipPath="url(#clip0_805_5284)"
          style={{
            transformOrigin: "50% 50%",
            transition: "transform 0.3s ease-in-out",
            transform: `rotate(${angle}deg)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <path
            d="M720.13 983C713.59 983 706.78 982.82 699.29 982.46C694.1 982.21 689.66 978.58 687.96 973.22C681.75 953.64 665.36 939.26 645.17 935.7C641.98 935.14 638.74 934.85 635.54 934.85C618.66 934.85 602.41 942.85 592.06 956.25C589.46 959.61 585.57 961.62 581.64 961.62C580.44 961.62 579.26 961.44 578.11 961.08C565.12 956.98 552.17 952.25 539.62 947.04C534.79 945.04 531.83 940.06 532.07 934.37C532.93 913.85 522.44 894.74 504.69 884.49C496.32 879.66 486.82 877.1 477.21 877.1C466.79 877.1 456.62 880.04 447.82 885.59C445.54 887.03 442.97 887.79 440.39 887.79C437.68 887.79 435.15 886.94 433.07 885.33C422.39 877.09 411.83 868.18 401.69 858.85C397.86 855.32 396.77 849.65 398.91 844.41C406.66 825.46 403.32 803.97 390.19 788.32C379.7 775.82 364.34 768.66 348.03 768.66C344.11 768.66 340.19 769.08 336.37 769.91C335.35 770.13 334.32 770.24 333.29 770.24C328.84 770.24 324.84 768.15 322.62 764.64C315.33 753.19 308.44 741.22 302.12 729.08C299.71 724.44 300.63 718.73 304.45 714.52C318.25 699.36 322.47 678 315.48 658.79C308.48 639.55 291.54 625.87 271.27 623.09C265.67 622.32 261.32 618.54 260.21 613.47C257.24 599.99 254.85 586.34 253.1 572.89C252.43 567.74 255.23 562.72 260.22 560.09C278.34 550.56 289.59 531.95 289.59 511.53C289.59 491.11 278.38 472.47 260.33 462.91C255.35 460.27 252.57 455.24 253.24 450.1C255.02 436.55 257.44 422.87 260.43 409.45C261.56 404.39 265.9 400.62 271.49 399.85C291.74 397.07 308.65 383.44 315.62 364.29C322.6 345.11 318.47 323.79 304.83 308.64C301.04 304.43 300.15 298.73 302.56 294.12C308.96 281.86 315.9 269.86 323.2 258.43C325.43 254.94 329.42 252.85 333.86 252.85C334.88 252.85 335.9 252.96 336.91 253.17C340.69 253.98 344.58 254.39 348.45 254.39C364.71 254.39 380.02 247.26 390.45 234.83C403.52 219.26 406.95 197.87 399.4 179.01C397.31 173.78 398.42 168.14 402.23 164.64C412.44 155.28 423.09 146.33 433.89 138.04C435.97 136.44 438.5 135.6 441.2 135.6C443.75 135.6 446.3 136.35 448.57 137.76C457.33 143.22 467.41 146.11 477.72 146.11C487.27 146.11 496.72 143.57 505.04 138.77C522.67 128.59 533.21 109.63 532.55 89.31C532.37 83.66 535.34 78.74 540.13 76.76C552.77 71.53 565.84 66.79 578.98 62.67C580.12 62.31 581.3 62.13 582.49 62.13C586.38 62.13 590.26 64.11 592.85 67.43C603.2 80.65 619.33 88.54 636 88.54C639.19 88.54 642.41 88.26 645.58 87.7C665.62 84.17 682 69.97 688.33 50.65C690.06 45.36 694.5 41.78 699.64 41.53C707.02 41.18 713.73 41 720.14 41C726.55 41 733.61 41.18 741.19 41.56C746.33 41.81 750.77 45.4 752.49 50.7C758.8 70.04 775.12 84.25 795.1 87.77C798.29 88.33 801.53 88.62 804.73 88.62C821.45 88.62 837.6 80.75 847.95 67.58C850.55 64.27 854.42 62.3 858.31 62.3C859.5 62.3 860.69 62.48 861.83 62.84C874.95 66.97 888.01 71.73 900.66 76.98C905.45 78.97 908.42 83.9 908.22 89.54C907.52 109.89 918 128.83 935.58 138.98C943.96 143.82 953.46 146.37 963.07 146.37C973.36 146.37 983.42 143.5 992.14 138.08C994.41 136.67 996.95 135.93 999.5 135.93C1002.21 135.93 1004.74 136.78 1006.82 138.38C1017.6 146.68 1028.24 155.64 1038.44 165.02C1042.25 168.53 1043.36 174.17 1041.26 179.4C1033.67 198.26 1037.05 219.62 1050.08 235.15C1060.57 247.66 1075.95 254.83 1092.26 254.83C1096.09 254.83 1099.93 254.43 1103.66 253.64C1104.66 253.43 1105.67 253.32 1106.68 253.32C1111.13 253.32 1115.12 255.41 1117.35 258.91C1124.66 270.38 1131.6 282.39 1137.96 294.61C1140.37 299.23 1139.46 304.93 1135.67 309.14C1121.99 324.28 1117.82 345.57 1124.78 364.69C1131.77 383.9 1148.68 397.59 1168.91 400.4C1174.5 401.18 1178.83 404.95 1179.95 410.01C1182.93 423.45 1185.33 437.12 1187.1 450.63C1187.77 455.78 1184.98 460.8 1179.99 463.44C1161.91 472.98 1150.68 491.57 1150.68 511.96C1150.68 532.35 1161.91 551.09 1179.99 560.65C1184.98 563.29 1187.77 568.31 1187.09 573.45C1185.33 586.93 1182.93 600.57 1179.96 613.99C1178.84 619.07 1174.48 622.84 1168.88 623.61C1148.59 626.37 1131.64 640.01 1124.65 659.21C1117.64 678.46 1121.84 699.84 1135.6 715.01C1139.42 719.22 1140.32 724.93 1137.91 729.56C1131.57 741.73 1124.66 753.69 1117.39 765.1C1115.16 768.6 1111.17 770.69 1106.72 770.69C1105.68 770.69 1104.64 770.58 1103.61 770.35C1099.76 769.51 1095.81 769.08 1091.86 769.08C1075.59 769.08 1060.26 776.22 1049.82 788.66C1036.66 804.34 1033.29 825.85 1041.01 844.79C1043.15 850.04 1042.05 855.7 1038.21 859.23C1028.07 868.54 1017.5 877.44 1006.8 885.67C1004.72 887.27 1002.19 888.12 999.49 888.12C996.79 888.12 994.33 887.36 992.04 885.91C983.21 880.33 973.03 877.37 962.58 877.37C953.02 877.37 943.56 879.91 935.23 884.72C917.45 894.99 906.92 914.1 907.75 934.61C907.98 940.3 905.01 945.26 900.18 947.26C887.64 952.45 874.69 957.15 861.67 961.25C860.53 961.61 859.35 961.79 858.16 961.79C854.23 961.79 850.33 959.78 847.73 956.4C837.39 942.97 821.14 934.95 804.28 934.95C801.09 934.95 797.86 935.23 794.7 935.79C774.48 939.36 758.04 953.72 751.81 973.28C750.1 978.64 745.55 982.27 740.22 982.52C733.01 982.86 726.44 983.02 720.14 983.02L720.13 983Z"
            fill="#F2F2F2"
            fillOpacity="0.2"
          />
          <path
            opacity="0.6"
            d="M843.701 149.04L767.651 358C764.941 365.44 757.191 369.78 749.431 368.2C739.951 366.28 730.141 365.26 720.101 365.26C710.061 365.26 700.251 366.27 690.771 368.2C683.011 369.78 675.261 365.44 672.551 358L596.501 149.04C593.331 140.33 598.211 130.81 607.101 128.19C643.641 117.44 681.541 112 720.101 112C758.661 112 796.571 117.43 833.101 128.19C841.991 130.81 846.861 140.33 843.701 149.04Z"
            fill="#191919"
          />
          <path
            opacity="0.6"
            d="M1048.04 313.44L855.51 424.61C848.65 428.57 839.93 426.92 835.01 420.72C822.76 405.31 807.47 392.43 790.06 382.96C783.11 379.18 779.99 370.88 782.69 363.45L858.73 154.5C861.9 145.79 871.77 141.63 880.26 145.35C950.51 176.08 1010.72 226.63 1053.32 290.64C1058.46 298.36 1056.08 308.8 1048.05 313.44H1048.04Z"
            fill="#191919"
          />
          <path
            opacity="0.6"
            d="M650.15 382.98C632.73 392.44 617.45 405.33 605.2 420.74C600.27 426.94 591.55 428.58 584.7 424.63L392.17 313.46C384.14 308.82 381.76 298.38 386.9 290.66C429.49 226.65 489.71 176.1 559.96 145.37C568.45 141.65 578.32 145.81 581.49 154.52L657.53 363.47C660.23 370.9 657.11 379.2 650.16 382.98H650.15Z"
            fill="#191919"
          />
          <path
            opacity="0.6"
            d="M721.6 160.42C721.05 160.42 720.63 160.17 720.32 159.67C720.02 159.17 720.02 158.67 720.32 158.17L729.1 142.95C729.5 142.3 730 141.91 730.6 141.79C731.2 141.67 731.85 141.78 732.55 142.13C736 143.68 739.05 145.84 741.7 148.62C744.35 151.39 746.4 154.53 747.85 158.03C748.1 158.68 748.06 159.24 747.74 159.72C747.42 160.2 746.9 160.43 746.2 160.43H721.6V160.42ZM710.87 164.1L701.87 148.5C701.47 147.85 701.37 147.2 701.57 146.55C701.77 145.9 702.17 145.37 702.77 144.98C705.17 143.28 707.83 141.93 710.76 140.93C713.68 139.93 716.8 139.43 720.1 139.43C720.85 139.43 721.68 139.47 722.57 139.54C723.47 139.61 724.22 139.7 724.82 139.8C725.52 139.9 725.98 140.2 726.21 140.7C726.44 141.2 726.37 141.75 726.02 142.35L713.5 164.1C713.2 164.6 712.76 164.85 712.19 164.85C711.62 164.85 711.18 164.6 710.88 164.1H710.87ZM692.65 175.42C692.1 175.42 691.6 175.23 691.15 174.86C690.7 174.49 690.42 174.02 690.32 173.47C690.22 172.92 690.16 172.32 690.13 171.67C690.1 171.02 690.09 170.27 690.09 169.42C690.09 166.27 690.6 163.13 691.63 160.01C692.66 156.88 694.24 153.92 696.39 151.12C696.94 150.42 697.58 150.07 698.3 150.07C699.02 150.07 699.59 150.45 699.99 151.19L712.59 173.17C712.89 173.67 712.88 174.17 712.55 174.67C712.23 175.17 711.79 175.42 711.24 175.42H692.64H692.65ZM707.65 196.72C704.35 195.12 701.33 192.95 698.58 190.2C695.83 187.45 693.76 184.33 692.36 180.83C692.11 180.18 692.16 179.62 692.51 179.14C692.86 178.66 693.39 178.43 694.09 178.43H718.54C719.09 178.43 719.52 178.68 719.82 179.18C720.12 179.68 720.12 180.18 719.82 180.68L711.19 195.76C710.79 196.41 710.29 196.84 709.69 197.03C709.09 197.23 708.41 197.13 707.66 196.73L707.65 196.72ZM720.1 199.42C719.4 199.42 718.61 199.38 717.74 199.31C716.86 199.24 716.1 199.15 715.45 199.05C714.75 198.95 714.27 198.65 714.02 198.15C713.77 197.65 713.82 197.1 714.17 196.5L726.54 174.9C726.84 174.4 727.34 174.15 728.04 174.15C728.74 174.15 729.24 174.4 729.54 174.9L738.39 190.27C738.74 190.82 738.85 191.42 738.73 192.07C738.61 192.72 738.19 193.32 737.49 193.87C735.19 195.57 732.5 196.92 729.43 197.92C726.35 198.92 723.24 199.42 720.09 199.42H720.1ZM740.42 187.8L727.67 165.67C727.37 165.17 727.38 164.67 727.71 164.17C728.04 163.67 728.47 163.42 729.02 163.42H747.55C748.1 163.42 748.6 163.61 749.05 163.98C749.5 164.35 749.78 164.82 749.88 165.37C749.98 165.92 750.04 166.52 750.07 167.17C750.1 167.82 750.11 168.57 750.11 169.42C750.11 172.57 749.6 175.73 748.57 178.91C747.54 182.08 745.96 185.05 743.81 187.8C743.41 188.35 742.83 188.64 742.08 188.66C741.33 188.69 740.78 188.4 740.43 187.8H740.42Z"
            fill="#777777"
          />
          <path
            opacity="0.6"
            d="M484.631 288.14L478.841 281.25C477.751 279.95 477.281 278.48 477.441 276.84C477.601 275.2 478.311 273.86 479.581 272.79L487.111 266.47C487.881 265.83 488.761 265.41 489.781 265.21C490.791 265.01 491.781 265.07 492.751 265.36C495.111 265.92 497.461 265.94 499.801 265.42C502.131 264.9 504.221 263.86 506.061 262.32C507.901 260.78 509.341 258.85 510.261 256.64C511.181 254.43 511.551 252.13 511.371 249.74C511.321 248.67 511.471 247.66 511.821 246.72C512.171 245.78 512.711 245 513.431 244.39L520.961 238.07C522.261 236.98 523.721 236.5 525.341 236.64C526.961 236.78 528.321 237.5 529.411 238.81L535.201 245.7C535.751 246.35 535.981 247.08 535.911 247.89C535.841 248.7 535.481 249.38 534.831 249.92L523.341 259.56C522.691 260.11 521.961 260.34 521.151 260.27C520.341 260.2 519.661 259.84 519.121 259.19L516.661 256.26C516.121 258.34 515.291 260.28 514.151 262.08C513.021 263.88 511.611 265.49 509.921 266.9C508.271 268.28 506.451 269.37 504.441 270.17C502.441 270.97 500.361 271.45 498.221 271.62L500.731 274.61C501.281 275.26 501.511 275.99 501.441 276.8C501.371 277.61 501.011 278.29 500.361 278.83L488.871 288.47C488.221 289.02 487.491 289.25 486.681 289.18C485.871 289.11 485.191 288.75 484.651 288.1L484.631 288.14ZM504.121 260.03C502.661 261.25 501.001 262.07 499.141 262.5C497.281 262.92 495.401 262.91 493.531 262.46C492.081 262.05 490.631 261.98 489.181 262.24C487.741 262.5 486.441 263.12 485.291 264.08C484.941 261.96 485.781 259.34 487.811 256.24C489.841 253.13 492.061 250.57 494.471 248.54C496.881 246.52 499.791 244.77 503.211 243.32C506.621 241.86 509.341 241.49 511.371 242.2C510.261 243.13 509.441 244.29 508.911 245.68C508.381 247.07 508.191 248.52 508.341 250.02C508.531 251.95 508.241 253.79 507.481 255.53C506.721 257.27 505.601 258.77 504.111 260.03H504.121ZM479.951 268.56C478.031 270.17 475.841 270.86 473.381 270.65C470.921 270.44 468.881 269.37 467.271 267.45C465.661 265.53 464.931 263.3 465.161 260.85C465.391 258.4 466.471 256.38 468.381 254.77C470.291 253.16 472.531 252.42 474.961 252.63C477.391 252.84 479.421 253.93 481.061 255.88C482.671 257.8 483.371 259.98 483.181 262.43C482.991 264.88 481.911 266.92 479.961 268.56H479.951ZM516.721 237.71C514.801 239.32 512.611 240.01 510.151 239.8C507.691 239.59 505.651 238.52 504.041 236.6C502.431 234.68 501.701 232.45 501.931 230C502.161 227.55 503.241 225.53 505.151 223.92C507.061 222.31 509.301 221.57 511.731 221.78C514.161 221.99 516.191 223.08 517.831 225.03C519.471 226.98 520.141 229.13 519.951 231.58C519.751 234.03 518.681 236.07 516.731 237.71H516.721ZM492.551 246.24C490.631 247.85 488.441 248.54 485.981 248.33C483.521 248.12 481.481 247.05 479.871 245.13C478.231 243.18 477.531 240.98 477.761 238.53C477.991 236.08 479.071 234.06 480.981 232.45C482.891 230.84 485.131 230.1 487.561 230.31C489.991 230.52 492.021 231.61 493.661 233.56C495.271 235.48 495.971 237.66 495.781 240.11C495.581 242.56 494.511 244.6 492.561 246.24H492.551Z"
            fill="#777777"
          />
          <path
            opacity="0.6"
            d="M974.85 265.16C972.63 267.8 970.05 269.93 967.1 271.53C964.15 273.13 961.06 274.24 957.81 274.85C956.9 275 956.08 274.81 955.36 274.27C954.64 273.73 954.23 272.97 954.15 271.98C954.07 271.06 954.34 270.28 954.96 269.62C955.58 268.96 956.34 268.52 957.24 268.3C959.61 267.81 961.87 266.93 964.01 265.66C966.15 264.39 968.04 262.78 969.68 260.83C971.32 258.88 972.56 256.75 973.41 254.46C974.26 252.17 974.72 249.81 974.79 247.39C974.81 246.43 975.1 245.6 975.66 244.89C976.22 244.18 976.97 243.77 977.92 243.65C978.87 243.53 979.69 243.78 980.38 244.39C981.07 245 981.42 245.77 981.43 246.69C981.4 249.99 980.85 253.24 979.78 256.42C978.71 259.6 977.07 262.51 974.85 265.16ZM964.4 256.38C963.37 257.61 962.19 258.62 960.86 259.43C959.53 260.24 958.12 260.83 956.62 261.21C955.72 261.43 954.9 261.25 954.18 260.68C953.46 260.1 953.05 259.32 952.96 258.34C952.88 257.42 953.13 256.6 953.7 255.88C954.28 255.16 955.01 254.61 955.9 254.25C956.48 254.02 957.05 253.71 957.6 253.33C958.15 252.95 958.65 252.48 959.1 251.95C959.55 251.42 959.92 250.84 960.2 250.23C960.48 249.62 960.7 248.99 960.86 248.34C961.06 247.4 961.46 246.59 962.06 245.92C962.66 245.25 963.41 244.87 964.33 244.79C965.32 244.7 966.16 244.97 966.85 245.58C967.54 246.19 967.86 246.96 967.8 247.89C967.69 249.43 967.35 250.92 966.78 252.37C966.21 253.82 965.42 255.16 964.39 256.39L964.4 256.38ZM934.97 247.35C932.44 245.23 931.03 242.51 930.74 239.2C930.45 235.89 931.37 232.97 933.49 230.44C935.61 227.91 938.33 226.5 941.64 226.21C944.95 225.92 947.87 226.84 950.4 228.96C952.93 231.08 954.34 233.8 954.63 237.11C954.92 240.42 954 243.34 951.88 245.87C949.76 248.4 947.04 249.81 943.73 250.1C940.42 250.39 937.5 249.47 934.97 247.35ZM905.01 245.71L906.55 243.87C907.61 242.61 908.93 241.69 910.52 241.13C912.1 240.57 913.71 240.48 915.34 240.87C918.13 241.51 921.04 242.52 924.07 243.89C927.1 245.26 930.09 247.18 933.04 249.65C935.99 252.12 938.4 254.74 940.27 257.48C942.14 260.23 943.64 262.92 944.76 265.55C945.43 267.09 945.62 268.69 945.34 270.34C945.06 272 944.39 273.46 943.33 274.72L941.79 276.56C940.73 277.82 939.37 278.53 937.72 278.67C936.07 278.81 934.6 278.36 933.34 277.3L905.76 254.16C904.5 253.1 903.79 251.74 903.65 250.09C903.51 248.43 903.96 246.97 905.02 245.71H905.01Z"
            fill="#777777"
          />
          <path
            opacity="0.6"
            d="M1096.26 586.46C1105.38 588.07 1111.2 597.06 1109.02 606.06C1100.06 643.07 1085.82 678.62 1066.54 712.01C1047.25 745.41 1023.6 775.52 996.02 801.78C989.31 808.17 978.62 807.63 972.67 800.53L829.69 630.14C824.6 624.07 824.72 615.19 829.97 609.25C842.92 594.63 853 577.42 859.32 558.48C861.82 550.98 869.46 546.46 877.25 547.83L1096.26 586.45V586.46Z"
            fill="#191919"
          />
          <path
            opacity="0.6"
            d="M957.569 834.04C895.829 879.51 821.949 906.38 745.219 911.26C735.969 911.85 728.109 904.57 728.109 895.3V672.97C728.109 665.06 733.879 658.31 741.699 657.16C761.659 654.22 780.309 647.25 796.799 637.12C803.559 632.97 812.339 634.37 817.439 640.45L960.399 810.82C966.359 817.92 965.029 828.55 957.559 834.04H957.569Z"
            fill="#191919"
          />
          <path
            opacity="0.6"
            d="M1099.03 570.7L880 532.07C872.18 530.69 866.59 523.78 866.79 515.84C866.82 514.56 866.84 513.28 866.84 511.99C866.84 493.02 863.24 474.9 856.7 458.27C853.78 450.85 856.63 442.41 863.54 438.43L1056.06 327.29C1064.09 322.65 1074.32 325.81 1078.44 334.12C1112.57 403.02 1126.25 480.43 1117.74 556.63C1116.71 565.84 1108.18 572.31 1099.05 570.7H1099.03Z"
            fill="#191919"
          />
          <path
            opacity="0.6"
            d="M1023.85 689.11C1024.12 688.63 1024.55 688.39 1025.14 688.38C1025.72 688.38 1026.16 688.62 1026.44 689.13L1035.24 704.34C1035.6 705.01 1035.69 705.64 1035.5 706.22C1035.31 706.8 1034.89 707.31 1034.23 707.74C1031.16 709.95 1027.76 711.51 1024.04 712.42C1020.31 713.33 1016.57 713.53 1012.81 713.04C1012.12 712.93 1011.65 712.62 1011.4 712.1C1011.15 711.58 1011.2 711.02 1011.55 710.41L1023.85 689.11ZM1026.03 677.98H1044.04C1044.8 677.96 1045.42 678.2 1045.88 678.7C1046.34 679.2 1046.6 679.81 1046.64 680.53C1046.91 683.46 1046.75 686.44 1046.15 689.47C1045.55 692.5 1044.43 695.45 1042.78 698.31C1042.4 698.96 1041.96 699.66 1041.45 700.4C1040.94 701.14 1040.48 701.75 1040.1 702.22C1039.66 702.78 1039.17 703.03 1038.63 702.97C1038.08 702.91 1037.64 702.59 1037.29 701.98L1024.72 680.26C1024.44 679.75 1024.44 679.25 1024.72 678.75C1025 678.25 1025.44 678 1026.03 677.99V677.98ZM1025.34 656.54C1025.62 656.06 1026.03 655.72 1026.58 655.52C1027.13 655.32 1027.67 655.31 1028.19 655.5C1028.71 655.69 1029.27 655.93 1029.84 656.24C1030.41 656.55 1031.07 656.91 1031.81 657.33C1034.54 658.91 1037 660.92 1039.19 663.37C1041.38 665.82 1043.16 668.68 1044.51 671.94C1044.84 672.77 1044.83 673.49 1044.46 674.12C1044.09 674.75 1043.49 675.05 1042.64 675.02L1017.31 674.94C1016.73 674.94 1016.3 674.69 1016.03 674.16C1015.76 673.63 1015.76 673.12 1016.03 672.65L1025.33 656.54H1025.34ZM999.39 658.88C1002.43 656.82 1005.82 655.29 1009.58 654.28C1013.34 653.27 1017.08 653.04 1020.81 653.58C1021.5 653.69 1021.96 654.01 1022.2 654.55C1022.44 655.09 1022.38 655.66 1022.03 656.27L1009.81 677.44C1009.54 677.92 1009.11 678.16 1008.52 678.17C1007.94 678.17 1007.5 677.93 1007.22 677.42L998.48 662.41C998.12 661.74 998 661.09 998.13 660.47C998.26 659.85 998.68 659.32 999.4 658.87L999.39 658.88ZM990.83 668.31C991.18 667.7 991.61 667.04 992.11 666.32C992.61 665.6 993.07 664.98 993.48 664.47C993.92 663.91 994.41 663.65 994.97 663.69C995.53 663.73 995.98 664.04 996.32 664.64L1008.84 686.16C1009.12 686.67 1009.09 687.23 1008.74 687.83C1008.39 688.43 1007.92 688.74 1007.34 688.75L989.6 688.73C988.95 688.76 988.37 688.56 987.87 688.12C987.37 687.69 987.06 687.03 986.93 686.15C986.61 683.31 986.78 680.31 987.45 677.14C988.12 673.98 989.24 671.03 990.82 668.3L990.83 668.31ZM990.73 691.73L1016.27 691.75C1016.85 691.75 1017.28 692 1017.55 692.53C1017.82 693.06 1017.82 693.57 1017.55 694.04L1008.29 710.08C1008.02 710.56 1007.6 710.9 1007.05 711.1C1006.5 711.3 1005.96 711.31 1005.44 711.12C1004.91 710.93 1004.36 710.69 1003.79 710.38C1003.22 710.07 1002.56 709.71 1001.82 709.29C999.09 707.71 996.61 705.69 994.37 703.21C992.13 700.73 990.36 697.88 989.05 694.64C988.77 694.02 988.81 693.38 989.17 692.71C989.52 692.05 990.05 691.72 990.74 691.71L990.73 691.73Z"
            fill="#777777"
          />
          <path
            opacity="0.6"
            d="M1031.73 420.03L1040.59 418.47C1042.26 418.17 1043.77 418.51 1045.11 419.46C1046.45 420.42 1047.26 421.71 1047.54 423.33L1049.25 433.01C1049.42 433.99 1049.34 434.97 1049.01 435.95C1048.67 436.92 1048.14 437.75 1047.39 438.44C1045.72 440.21 1044.53 442.23 1043.82 444.52C1043.11 446.8 1042.96 449.13 1043.37 451.49C1043.8 453.9 1044.73 456.06 1046.19 457.96C1047.64 459.86 1049.45 461.33 1051.61 462.37C1052.56 462.86 1053.36 463.5 1054 464.27C1054.64 465.04 1055.05 465.9 1055.21 466.84L1056.92 476.52C1057.22 478.19 1056.9 479.7 1055.96 481.03C1055.03 482.36 1053.72 483.18 1052.05 483.47L1043.19 485.03C1042.35 485.18 1041.6 485.02 1040.94 484.55C1040.27 484.08 1039.87 483.43 1039.72 482.59L1037.12 467.82C1036.97 466.98 1037.13 466.23 1037.6 465.57C1038.07 464.91 1038.72 464.5 1039.56 464.35L1043.33 463.69C1041.8 462.18 1040.53 460.49 1039.54 458.61C1038.55 456.73 1037.86 454.7 1037.48 452.54C1037.11 450.42 1037.07 448.3 1037.38 446.16C1037.69 444.02 1038.31 441.99 1039.23 440.05L1035.39 440.73C1034.55 440.88 1033.8 440.72 1033.14 440.25C1032.47 439.78 1032.07 439.13 1031.92 438.29L1029.32 423.52C1029.17 422.68 1029.33 421.93 1029.8 421.27C1030.27 420.61 1030.92 420.2 1031.76 420.05L1031.73 420.03ZM1046.32 450.97C1045.99 449.1 1046.11 447.25 1046.67 445.42C1047.24 443.59 1048.18 441.98 1049.51 440.58C1050.59 439.53 1051.38 438.31 1051.87 436.93C1052.36 435.55 1052.48 434.12 1052.22 432.64C1054.23 433.4 1056.08 435.44 1057.75 438.75C1059.43 442.06 1060.54 445.27 1061.08 448.37C1061.63 451.47 1061.68 454.86 1061.24 458.55C1060.8 462.23 1059.76 464.78 1058.13 466.18C1057.88 464.75 1057.28 463.46 1056.34 462.31C1055.4 461.16 1054.24 460.27 1052.86 459.65C1051.09 458.84 1049.64 457.68 1048.51 456.15C1047.38 454.62 1046.64 452.9 1046.3 450.98L1046.32 450.97ZM1051.02 425.77C1050.59 423.31 1051.08 421.06 1052.5 419.04C1053.92 417.01 1055.86 415.78 1058.32 415.35C1060.78 414.92 1063.09 415.4 1065.09 416.82C1067.09 418.24 1068.31 420.19 1068.75 422.65C1069.19 425.16 1068.71 427.42 1067.32 429.41C1065.92 431.41 1063.97 432.63 1061.45 433.07C1058.99 433.5 1056.75 433.02 1054.72 431.63C1052.69 430.24 1051.46 428.28 1051.02 425.77ZM1059.36 473.04C1058.93 470.58 1059.42 468.33 1060.84 466.31C1062.26 464.28 1064.2 463.05 1066.66 462.62C1069.12 462.19 1071.43 462.67 1073.43 464.09C1075.43 465.51 1076.65 467.46 1077.09 469.92C1077.53 472.43 1077.05 474.69 1075.66 476.68C1074.26 478.68 1072.31 479.9 1069.79 480.34C1067.27 480.78 1065.09 480.29 1063.06 478.9C1061.04 477.51 1059.8 475.55 1059.36 473.04ZM1064.05 447.84C1063.62 445.38 1064.11 443.13 1065.53 441.11C1066.95 439.09 1068.89 437.85 1071.35 437.42C1073.86 436.98 1076.12 437.47 1078.12 438.89C1080.12 440.31 1081.34 442.26 1081.78 444.72C1082.22 447.18 1081.74 449.49 1080.35 451.48C1078.95 453.48 1077 454.7 1074.48 455.14C1071.96 455.58 1069.78 455.09 1067.75 453.7C1065.73 452.31 1064.49 450.35 1064.05 447.84Z"
            fill="#777777"
          />
          <path
            opacity="0.6"
            d="M806.519 856.07C805.339 852.83 804.789 849.53 804.869 846.17C804.949 842.81 805.539 839.58 806.649 836.47C806.969 835.61 807.549 835 808.379 834.64C809.209 834.29 810.069 834.32 810.969 834.74C811.799 835.13 812.349 835.75 812.609 836.62C812.869 837.48 812.869 838.36 812.609 839.25C811.849 841.55 811.479 843.94 811.509 846.43C811.539 848.92 811.989 851.36 812.859 853.76C813.729 856.16 814.949 858.29 816.509 860.17C818.069 862.05 819.879 863.62 821.939 864.9C822.759 865.4 823.339 866.07 823.669 866.91C823.999 867.75 823.979 868.61 823.609 869.49C823.239 870.37 822.609 870.96 821.739 871.25C820.869 871.54 820.019 871.46 819.219 871.01C816.369 869.33 813.839 867.23 811.619 864.72C809.399 862.2 807.699 859.32 806.519 856.08V856.07ZM819.349 851.4C818.799 849.9 818.509 848.37 818.479 846.81C818.449 845.25 818.639 843.73 819.059 842.25C819.319 841.36 819.879 840.74 820.739 840.4C821.599 840.06 822.479 840.1 823.379 840.52C824.209 840.91 824.799 841.53 825.139 842.39C825.479 843.25 825.579 844.16 825.449 845.11C825.359 845.73 825.339 846.37 825.399 847.05C825.459 847.73 825.609 848.38 825.849 849.04C826.089 849.7 826.399 850.3 826.789 850.85C827.179 851.4 827.609 851.91 828.099 852.37C828.809 853.01 829.309 853.76 829.599 854.62C829.879 855.47 829.829 856.32 829.439 857.15C829.019 858.05 828.369 858.64 827.499 858.94C826.619 859.23 825.799 859.12 825.019 858.6C823.749 857.73 822.619 856.69 821.649 855.48C820.679 854.26 819.909 852.91 819.369 851.4H819.349ZM841.879 830.43C844.979 829.3 848.039 829.44 851.049 830.84C854.059 832.24 856.129 834.5 857.259 837.6C858.389 840.7 858.249 843.76 856.849 846.77C855.449 849.78 853.189 851.85 850.089 852.98C846.989 854.11 843.929 853.97 840.919 852.57C837.909 851.17 835.839 848.91 834.709 845.81C833.579 842.71 833.719 839.65 835.119 836.64C836.519 833.63 838.779 831.56 841.879 830.43ZM858.279 805.3L859.099 807.56C859.659 809.11 859.799 810.71 859.489 812.37C859.189 814.02 858.459 815.46 857.309 816.68C855.359 818.77 853.029 820.79 850.329 822.73C847.629 824.67 844.469 826.3 840.849 827.62C837.229 828.94 833.769 829.72 830.449 829.97C827.139 830.22 824.059 830.17 821.219 829.82C819.549 829.63 818.069 829 816.779 827.92C815.489 826.85 814.559 825.54 813.989 823.99L813.169 821.73C812.609 820.18 812.669 818.65 813.379 817.15C814.089 815.65 815.209 814.61 816.759 814.04L850.589 801.73C852.139 801.17 853.669 801.23 855.169 801.94C856.679 802.64 857.709 803.77 858.279 805.32V805.3Z"
            fill="#777777"
          />
          <path
            opacity="0.6"
            d="M610.519 630.17L467.539 800.56C461.579 807.66 450.889 808.2 444.189 801.81C416.609 775.54 392.949 745.44 373.669 712.05C354.389 678.65 340.149 643.11 331.189 606.1C329.009 597.1 334.819 588.11 343.949 586.5L562.949 547.87C570.739 546.5 578.379 551.01 580.879 558.51C587.199 577.45 597.279 594.67 610.229 609.29C615.489 615.22 615.609 624.11 610.509 630.18L610.519 630.17Z"
            fill="#191919"
          />
          <path
            opacity="0.6"
            d="M573.359 512C573.359 513.29 573.379 514.58 573.409 515.87C573.609 523.81 568.029 530.72 560.199 532.1L341.179 570.73C332.049 572.34 323.519 565.87 322.489 556.66C313.979 480.46 327.659 403.04 361.789 334.15C365.909 325.84 376.139 322.68 384.169 327.32L576.679 438.45C583.589 442.44 586.439 450.87 583.519 458.29C576.969 474.92 573.379 493.04 573.379 512H573.359Z"
            fill="#191919"
          />
          <path
            opacity="0.6"
            d="M712.11 672.97V895.31C712.11 904.58 704.25 911.86 695 911.27C618.27 906.39 544.38 879.52 482.65 834.05C475.19 828.55 473.86 817.93 479.81 810.83L622.77 640.46C627.87 634.38 636.65 632.97 643.41 637.13C659.9 647.26 678.55 654.22 698.5 657.16C706.32 658.31 712.1 665.06 712.1 672.97H712.11Z"
            fill="#191919"
          />
          <path
            opacity="0.6"
            d="M414.859 686.53C415.129 687.01 415.129 687.5 414.849 688.01C414.569 688.52 414.129 688.77 413.549 688.76H395.979C395.219 688.76 394.629 688.51 394.219 688.06C393.809 687.61 393.579 686.98 393.539 686.2C393.159 682.44 393.509 678.71 394.579 675.03C395.659 671.35 397.349 668 399.659 665C400.099 664.46 400.599 664.21 401.179 664.25C401.759 664.29 402.219 664.62 402.569 665.23L414.869 686.53H414.859ZM423.399 693.98L414.389 709.57C414.029 710.24 413.509 710.65 412.849 710.8C412.189 710.95 411.529 710.87 410.889 710.55C408.219 709.32 405.719 707.69 403.389 705.66C401.059 703.63 399.069 701.18 397.419 698.32C397.049 697.67 396.659 696.94 396.279 696.12C395.889 695.3 395.599 694.61 395.379 694.04C395.119 693.38 395.149 692.83 395.469 692.39C395.789 691.95 396.299 691.72 396.989 691.73L422.089 691.7C422.669 691.7 423.109 691.96 423.399 692.46C423.689 692.96 423.689 693.46 423.399 693.97V693.98ZM442.319 704.1C442.599 704.58 442.679 705.1 442.579 705.68C442.479 706.26 442.219 706.73 441.789 707.09C441.359 707.45 440.879 707.81 440.319 708.15C439.759 708.49 439.129 708.88 438.389 709.31C435.659 710.89 432.689 712.01 429.469 712.68C426.249 713.35 422.889 713.46 419.389 713C418.509 712.87 417.889 712.5 417.519 711.87C417.149 711.24 417.199 710.57 417.649 709.85L430.379 687.95C430.659 687.44 431.099 687.2 431.699 687.23C432.299 687.26 432.729 687.52 433.009 687.99L442.309 704.1H442.319ZM453.269 680.46C453.529 684.12 453.159 687.83 452.159 691.58C451.149 695.34 449.479 698.7 447.149 701.66C446.709 702.2 446.199 702.44 445.609 702.37C445.019 702.3 444.559 701.97 444.209 701.36L431.989 680.19C431.719 679.71 431.719 679.22 431.999 678.71C432.279 678.2 432.719 677.95 433.299 677.96L450.669 677.89C451.429 677.91 452.049 678.13 452.519 678.55C452.989 678.97 453.239 679.6 453.269 680.45V680.46ZM449.379 668.32C449.729 668.93 450.089 669.63 450.459 670.42C450.829 671.22 451.139 671.92 451.379 672.53C451.639 673.19 451.619 673.75 451.309 674.21C450.999 674.67 450.499 674.91 449.809 674.91L424.919 674.99C424.339 674.99 423.869 674.67 423.519 674.07C423.169 673.47 423.139 672.91 423.419 672.4L432.309 657.05C432.609 656.47 433.069 656.07 433.699 655.86C434.329 655.64 435.049 655.7 435.879 656.03C438.499 657.17 441.019 658.82 443.419 660.99C445.819 663.15 447.809 665.6 449.389 668.33L449.379 668.32ZM429.149 656.54L416.359 678.64C416.079 679.15 415.639 679.39 415.039 679.36C414.439 679.33 414.009 679.07 413.729 678.6L404.469 662.56C404.199 662.08 404.109 661.56 404.209 660.98C404.309 660.4 404.569 659.93 404.999 659.57C405.429 659.21 405.909 658.85 406.469 658.51C407.029 658.17 407.659 657.78 408.399 657.35C411.129 655.77 414.119 654.64 417.389 653.94C420.649 653.24 424.009 653.13 427.469 653.62C428.149 653.69 428.679 654.05 429.079 654.68C429.479 655.32 429.499 655.94 429.159 656.54H429.149Z"
            fill="#777777"
          />
          <path
            opacity="0.6"
            d="M643.951 827.89L640.871 836.35C640.291 837.95 639.251 839.09 637.751 839.76C636.251 840.44 634.731 840.5 633.181 839.93L623.951 836.57C623.011 836.23 622.201 835.67 621.531 834.89C620.861 834.11 620.401 833.23 620.181 832.24C619.481 829.91 618.331 827.87 616.711 826.11C615.091 824.35 613.151 823.06 610.901 822.24C608.651 821.42 606.261 821.14 603.891 821.44C601.521 821.75 599.341 822.58 597.361 823.93C596.461 824.51 595.511 824.88 594.521 825.05C593.531 825.22 592.581 825.14 591.691 824.82L582.461 821.46C580.861 820.88 579.721 819.85 579.031 818.38C578.341 816.91 578.291 815.37 578.871 813.77L581.951 805.31C582.241 804.51 582.751 803.94 583.491 803.6C584.231 803.26 584.991 803.23 585.791 803.52L599.891 808.65C600.691 808.94 601.261 809.45 601.601 810.19C601.941 810.93 601.971 811.69 601.681 812.49L600.371 816.08C602.441 815.5 604.541 815.26 606.671 815.34C608.801 815.42 610.891 815.84 612.961 816.59C614.981 817.33 616.841 818.36 618.531 819.7C620.231 821.04 621.681 822.59 622.901 824.36L624.231 820.7C624.521 819.9 625.031 819.33 625.771 818.99C626.511 818.65 627.271 818.62 628.071 818.91L642.171 824.04C642.971 824.33 643.541 824.84 643.881 825.58C644.221 826.32 644.251 827.08 643.961 827.88L643.951 827.89ZM609.861 825.06C611.651 825.71 613.191 826.74 614.491 828.14C615.791 829.54 616.711 831.17 617.261 833.02C617.631 834.49 618.291 835.78 619.241 836.89C620.191 838.01 621.371 838.82 622.781 839.34C621.111 840.7 618.431 841.28 614.731 841.08C611.031 840.88 607.691 840.24 604.731 839.16C601.771 838.08 598.811 836.43 595.841 834.21C592.871 831.99 591.191 829.82 590.791 827.7C592.151 828.2 593.571 828.33 595.041 828.09C596.511 827.85 597.861 827.29 599.081 826.41C600.661 825.28 602.401 824.61 604.281 824.39C606.171 824.17 608.031 824.39 609.861 825.06ZM629.331 841.73C631.681 842.59 633.381 844.13 634.421 846.38C635.471 848.62 635.561 850.92 634.711 853.27C633.841 855.67 632.281 857.38 630.051 858.4C627.821 859.42 625.521 859.51 623.171 858.65C620.821 857.79 619.061 856.24 618.031 854.03C617.001 851.82 616.921 849.52 617.791 847.12C618.651 844.77 620.181 843.07 622.401 842.01C624.621 840.96 626.931 840.86 629.321 841.74L629.331 841.73ZM584.231 825.31C586.581 826.17 588.281 827.71 589.321 829.96C590.371 832.2 590.461 834.5 589.611 836.85C588.741 839.25 587.181 840.96 584.951 841.98C582.721 843 580.421 843.09 578.071 842.23C575.721 841.37 573.961 839.82 572.931 837.61C571.901 835.4 571.821 833.1 572.691 830.7C573.561 828.3 575.081 826.65 577.301 825.59C579.521 824.54 581.831 824.44 584.221 825.32L584.231 825.31ZM603.701 841.98C606.051 842.84 607.751 844.38 608.791 846.63C609.841 848.87 609.931 851.17 609.081 853.52C608.211 855.92 606.651 857.63 604.421 858.65C602.191 859.67 599.891 859.76 597.541 858.9C595.191 858.04 593.431 856.49 592.401 854.28C591.371 852.07 591.291 849.77 592.161 847.37C593.031 844.97 594.551 843.32 596.771 842.26C598.991 841.21 601.301 841.11 603.691 841.99L603.701 841.98Z"
            fill="#777777"
          />
          <path
            opacity="0.6"
            d="M378.929 414.83C382.329 415.43 385.459 416.6 388.319 418.35C391.179 420.1 393.689 422.23 395.839 424.74C396.429 425.45 396.659 426.26 396.559 427.15C396.449 428.05 395.989 428.78 395.179 429.34C394.429 429.87 393.609 430.03 392.729 429.82C391.849 429.61 391.089 429.18 390.449 428.5C388.839 426.69 386.949 425.18 384.779 423.96C382.609 422.74 380.269 421.91 377.759 421.46C375.249 421.02 372.789 421 370.379 421.42C367.969 421.83 365.699 422.61 363.569 423.76C362.729 424.22 361.859 424.39 360.969 424.25C360.079 424.12 359.349 423.67 358.769 422.91C358.189 422.15 357.999 421.31 358.179 420.41C358.359 419.51 358.849 418.82 359.649 418.35C362.529 416.72 365.609 415.58 368.899 414.92C372.189 414.26 375.529 414.22 378.929 414.82V414.83ZM376.559 428.28C378.139 428.56 379.609 429.07 380.969 429.82C382.339 430.57 383.559 431.49 384.629 432.6C385.269 433.27 385.529 434.07 385.389 434.98C385.249 435.9 384.779 436.64 383.969 437.2C383.219 437.73 382.379 437.92 381.469 437.79C380.549 437.65 379.719 437.29 378.959 436.7C378.469 436.31 377.919 435.97 377.309 435.69C376.699 435.41 376.049 435.2 375.359 435.08C374.669 434.96 373.989 434.93 373.319 434.99C372.649 435.05 371.989 435.17 371.349 435.37C370.429 435.67 369.539 435.72 368.649 435.54C367.769 435.36 367.059 434.89 366.539 434.14C365.969 433.33 365.779 432.47 365.969 431.56C366.159 430.65 366.659 429.99 367.499 429.58C368.889 428.91 370.349 428.46 371.889 428.22C373.429 427.98 374.989 428 376.559 428.28ZM383.459 458.28C382.889 461.53 381.239 464.11 378.519 466.01C375.799 467.92 372.809 468.58 369.559 468.01C366.309 467.44 363.729 465.79 361.829 463.07C359.919 460.35 359.259 457.36 359.829 454.11C360.399 450.86 362.049 448.28 364.769 446.38C367.489 444.47 370.479 443.81 373.729 444.38C376.979 444.95 379.559 446.6 381.459 449.32C383.369 452.04 384.029 455.03 383.459 458.28ZM397.019 485.04L394.659 484.62C393.039 484.33 391.579 483.65 390.299 482.56C389.019 481.47 388.139 480.12 387.659 478.52C386.819 475.78 386.239 472.76 385.909 469.45C385.579 466.14 385.749 462.59 386.419 458.8C387.089 455.01 388.139 451.62 389.589 448.62C391.029 445.62 392.609 442.98 394.339 440.7C395.339 439.35 396.629 438.39 398.199 437.8C399.779 437.21 401.379 437.07 402.999 437.35L405.359 437.77C406.979 438.06 408.269 438.88 409.229 440.24C410.189 441.6 410.519 443.09 410.229 444.72L403.979 480.17C403.689 481.79 402.869 483.08 401.509 484.04C400.149 484.99 398.659 485.33 397.029 485.04H397.019Z"
            fill="#777777"
          />
        </g>
        <motion.g
          initial={{ scale: 1 }}
          animate={{ scale: isActive ? 1.01 : 1 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <motion.path
            className={isActive ? "active" : ""}
            opacity="1"
            d="M860.277 105.06L773.973 342.147C770.891 350.612 762.07 355.496 753.239 353.708C751.815 353.423 750.389 353.148 748.948 352.894C727.755 349.157 706.802 349.61 686.935 353.64C678.07 355.441 669.202 350.594 666.117 342.09L579.878 105.116C576.276 95.2308 581.821 84.4245 591.917 81.4587C675.614 56.9017 764.79 56.8676 848.244 81.3856C858.33 84.3505 863.878 95.1547 860.281 105.037L860.277 105.06Z"
            fill="#C06EFF"
          />
          <IconWheel currentSection={currentSection} />
        </motion.g>
        <path
          onClick={() => {
            handleClick(1);
            onPrev();
          }}
          opacity="0.6"
          d="M650.148 382.98C632.728 392.44 617.448 405.33 605.198 420.74C600.268 426.94 591.548 428.58 584.698 424.63L392.168 313.46C384.138 308.82 381.758 298.38 386.898 290.66C429.488 226.65 489.708 176.1 559.958 145.37C568.448 141.65 578.318 145.81 581.488 154.52L657.528 363.47C660.228 370.9 657.108 379.2 650.158 382.98H650.148Z"
          fill="transparent"
        />
        <path
          onClick={() => {
            handleClick(2);
            onNext();
          }}
          opacity="0.6"
          d="M1048.04 313.44L855.509 424.61C848.649 428.57 839.929 426.92 835.009 420.72C822.759 405.31 807.469 392.43 790.059 382.96C783.109 379.18 779.989 370.88 782.689 363.45L858.729 154.5C861.899 145.79 871.769 141.63 880.259 145.35C950.509 176.08 1010.72 226.63 1053.32 290.64C1058.46 298.36 1056.08 308.8 1048.05 313.44H1048.04Z"
          fill="transparent"
        />
        <defs>
          <filter
            id="filter0_d_580_1557"
            x="575"
            y="63"
            width="290"
            height="299"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_580_1557"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_580_1557"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
};

export default Wheel;
