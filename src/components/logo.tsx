import React from 'react';

interface EmployeeProps {
    Fill_color: string;
  }
function Logo({Fill_color}: EmployeeProps) {
    return (
        <svg width="160" height="27" viewBox="0 0 160 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.984 20.338C7.75333 20.338 6.59633 20.0953 5.513 19.61C4.42967 19.116 3.47633 18.4357 2.653 17.569C1.83833 16.7023 1.197 15.7013 0.729 14.566C0.269667 13.422 0.0400001 12.2 0.0400001 10.9C0.0400001 9.59133 0.269667 8.36933 0.729 7.234C1.197 6.09 1.83833 5.089 2.653 4.231C3.47633 3.36433 4.42967 2.68833 5.513 2.203C6.59633 1.709 7.75333 1.462 8.984 1.462C10.4573 1.462 11.8137 1.80433 13.053 2.489C14.2923 3.165 15.3193 4.07067 16.134 5.206L12.936 6.935C12.4507 6.363 11.8657 5.908 11.181 5.57C10.4963 5.22333 9.764 5.05 8.984 5.05C8.24733 5.05 7.554 5.20167 6.904 5.505C6.254 5.80833 5.682 6.22867 5.188 6.766C4.70267 7.30333 4.32133 7.923 4.044 8.625C3.76667 9.327 3.628 10.0853 3.628 10.9C3.628 11.706 3.76667 12.4643 4.044 13.175C4.32133 13.877 4.70267 14.4967 5.188 15.034C5.682 15.5627 6.254 15.983 6.904 16.295C7.554 16.5983 8.24733 16.75 8.984 16.75C9.77267 16.75 10.505 16.5767 11.181 16.23C11.8657 15.8833 12.4507 15.424 12.936 14.852L16.134 16.594C15.3193 17.7207 14.2923 18.6263 13.053 19.311C11.8137 19.9957 10.4573 20.338 8.984 20.338ZM23.571 20.338C22.375 20.338 21.283 20.0303 20.295 19.415C19.3157 18.7997 18.5313 17.9763 17.942 16.945C17.3613 15.905 17.071 14.7567 17.071 13.5C17.071 12.5467 17.24 11.6583 17.578 10.835C17.916 10.003 18.3797 9.275 18.969 8.651C19.567 8.01833 20.2603 7.52433 21.049 7.169C21.8377 6.81367 22.6783 6.636 23.571 6.636C24.767 6.636 25.8547 6.94367 26.834 7.559C27.822 8.17433 28.6063 9.002 29.187 10.042C29.7763 11.082 30.071 12.2347 30.071 13.5C30.071 14.4447 29.902 15.3287 29.564 16.152C29.226 16.9753 28.758 17.7033 28.16 18.336C27.5707 18.96 26.8817 19.4497 26.093 19.805C25.313 20.1603 24.4723 20.338 23.571 20.338ZM23.571 16.75C24.1257 16.75 24.624 16.6027 25.066 16.308C25.508 16.0047 25.8547 15.606 26.106 15.112C26.3573 14.618 26.483 14.0807 26.483 13.5C26.483 12.902 26.3487 12.356 26.08 11.862C25.82 11.3593 25.469 10.9607 25.027 10.666C24.585 10.3713 24.0997 10.224 23.571 10.224C23.025 10.224 22.531 10.3757 22.089 10.679C21.647 10.9823 21.296 11.381 21.036 11.875C20.7847 12.369 20.659 12.9107 20.659 13.5C20.659 14.1153 20.789 14.67 21.049 15.164C21.3177 15.6493 21.673 16.035 22.115 16.321C22.557 16.607 23.0423 16.75 23.571 16.75ZM32.0444 20V7H35.6324V7.962C36.0744 7.546 36.5857 7.221 37.1664 6.987C37.747 6.753 38.3624 6.636 39.0124 6.636C39.8964 6.636 40.7067 6.83967 41.4434 7.247C42.1887 7.65433 42.7867 8.196 43.2374 8.872C43.6967 8.196 44.2947 7.65433 45.0314 7.247C45.768 6.83967 46.574 6.636 47.4494 6.636C48.394 6.636 49.2477 6.86567 50.0104 7.325C50.7817 7.78433 51.397 8.39967 51.8564 9.171C52.3157 9.93367 52.5454 10.7873 52.5454 11.732V20H48.9574V12.72C48.9574 12.2693 48.8447 11.862 48.6194 11.498C48.4027 11.1253 48.1124 10.8307 47.7484 10.614C47.3844 10.3887 46.977 10.276 46.5264 10.276C46.0757 10.276 45.664 10.3843 45.2914 10.601C44.9274 10.8177 44.6327 11.1123 44.4074 11.485C44.1907 11.849 44.0824 12.2607 44.0824 12.72V20H40.4944V12.72C40.4944 12.2607 40.386 11.849 40.1694 11.485C39.9527 11.1123 39.658 10.8177 39.2854 10.601C38.9214 10.3843 38.514 10.276 38.0634 10.276C37.6214 10.276 37.214 10.3887 36.8414 10.614C36.4774 10.8307 36.1827 11.1253 35.9574 11.498C35.7407 11.862 35.6324 12.2693 35.6324 12.72V20H32.0444ZM58.7378 26.5H55.1498V7H58.7378V8.404C59.1538 7.89267 59.6478 7.47667 60.2198 7.156C60.7918 6.82667 61.4592 6.662 62.2218 6.662C63.1665 6.662 64.0505 6.83967 64.8738 7.195C65.7058 7.55033 66.4338 8.04433 67.0578 8.677C67.6818 9.301 68.1715 10.0247 68.5268 10.848C68.8822 11.6713 69.0598 12.5553 69.0598 13.5C69.0598 14.4447 68.8822 15.333 68.5268 16.165C68.1715 16.997 67.6818 17.7293 67.0578 18.362C66.4338 18.986 65.7058 19.4757 64.8738 19.831C64.0505 20.1863 63.1665 20.364 62.2218 20.364C61.4592 20.364 60.7918 20.1993 60.2198 19.87C59.6478 19.5407 59.1538 19.1247 58.7378 18.622V26.5ZM62.1698 10.107C61.5805 10.107 61.0475 10.263 60.5708 10.575C60.1028 10.8783 59.7302 11.2857 59.4528 11.797C59.1842 12.3083 59.0498 12.876 59.0498 13.5C59.0498 14.124 59.1842 14.696 59.4528 15.216C59.7302 15.7273 60.1028 16.1347 60.5708 16.438C61.0475 16.7413 61.5805 16.893 62.1698 16.893C62.7592 16.893 63.2965 16.7413 63.7818 16.438C64.2758 16.1347 64.6658 15.7273 64.9518 15.216C65.2465 14.7047 65.3938 14.1327 65.3938 13.5C65.3938 12.8847 65.2508 12.3213 64.9648 11.81C64.6788 11.29 64.2888 10.8783 63.7948 10.575C63.3095 10.263 62.7678 10.107 62.1698 10.107ZM80.6879 7H84.2759V20H80.6749L80.5059 18.648C80.1679 19.1507 79.7346 19.558 79.2059 19.87C78.6773 20.182 78.0576 20.338 77.3469 20.338C76.3763 20.338 75.4706 20.156 74.6299 19.792C73.7893 19.428 73.0483 18.9253 72.4069 18.284C71.7656 17.6427 71.2629 16.9017 70.8989 16.061C70.5436 15.2117 70.3659 14.3017 70.3659 13.331C70.3659 12.4037 70.5349 11.537 70.8729 10.731C71.2109 9.925 71.6876 9.21433 72.3029 8.599C72.9183 7.98367 73.6246 7.50267 74.4219 7.156C75.2279 6.80933 76.0946 6.636 77.0219 6.636C77.8193 6.636 78.5343 6.805 79.1669 7.143C79.8083 7.481 80.3673 7.91 80.8439 8.43L80.6879 7ZM77.2559 16.893C77.8453 16.893 78.3783 16.7413 78.8549 16.438C79.3316 16.1347 79.7086 15.7273 79.9859 15.216C80.2633 14.696 80.4019 14.124 80.4019 13.5C80.4019 12.8673 80.2633 12.2953 79.9859 11.784C79.7086 11.2727 79.3316 10.8653 78.8549 10.562C78.3783 10.2587 77.8453 10.107 77.2559 10.107C76.6579 10.107 76.1163 10.2587 75.6309 10.562C75.1456 10.8653 74.7599 11.277 74.4739 11.797C74.1879 12.3083 74.0449 12.876 74.0449 13.5C74.0449 14.124 74.1879 14.696 74.4739 15.216C74.7686 15.7273 75.1586 16.1347 75.6439 16.438C76.1293 16.7413 76.6666 16.893 77.2559 16.893ZM86.9011 20L86.8881 7H90.4761L90.4891 7.962C90.9225 7.546 91.4295 7.221 92.0101 6.987C92.5995 6.753 93.2191 6.636 93.8691 6.636C94.3458 6.636 94.8225 6.70533 95.2991 6.844L93.8821 10.471C93.5701 10.341 93.2538 10.276 92.9331 10.276C92.4825 10.276 92.0708 10.3843 91.6981 10.601C91.3255 10.8177 91.0308 11.1123 90.8141 11.485C90.5975 11.849 90.4891 12.2607 90.4891 12.72V20H86.9011ZM101.825 20.338C100.629 20.338 99.5369 20.0303 98.5489 19.415C97.5696 18.7997 96.7853 17.972 96.1959 16.932C95.6153 15.892 95.3249 14.7437 95.3249 13.487C95.3249 12.5423 95.4939 11.6583 95.8319 10.835C96.1699 10.003 96.6336 9.275 97.2229 8.651C97.8209 8.01833 98.5143 7.52433 99.3029 7.169C100.092 6.81367 100.932 6.636 101.825 6.636C102.856 6.636 103.797 6.857 104.646 7.299C105.504 7.741 106.228 8.34333 106.817 9.106C107.415 9.86867 107.84 10.731 108.091 11.693C108.351 12.655 108.394 13.656 108.221 14.696H99.1989C99.3116 15.0773 99.4849 15.424 99.7189 15.736C99.9616 16.0393 100.256 16.282 100.603 16.464C100.958 16.646 101.366 16.7413 101.825 16.75C102.276 16.7587 102.692 16.6547 103.073 16.438C103.454 16.2213 103.779 15.931 104.048 15.567L107.714 16.412C107.185 17.5647 106.397 18.5093 105.348 19.246C104.299 19.974 103.125 20.338 101.825 20.338ZM99.0689 12.044H104.594C104.481 11.6107 104.291 11.2207 104.022 10.874C103.753 10.5273 103.428 10.2543 103.047 10.055C102.674 9.85567 102.267 9.756 101.825 9.756C101.392 9.756 100.984 9.85567 100.603 10.055C100.23 10.2543 99.9096 10.5273 99.6409 10.874C99.3809 11.212 99.1903 11.602 99.0689 12.044ZM122.147 11.732V20H118.559V12.72C118.559 12.2607 118.446 11.849 118.221 11.485C118.004 11.1123 117.709 10.8177 117.337 10.601C116.973 10.3843 116.565 10.276 116.115 10.276C115.664 10.276 115.252 10.3843 114.88 10.601C114.507 10.8177 114.212 11.1123 113.996 11.485C113.779 11.849 113.671 12.2607 113.671 12.72V20H110.083L110.07 0.499998H113.658L113.671 7.962C114.104 7.546 114.611 7.221 115.192 6.987C115.781 6.753 116.401 6.636 117.051 6.636C117.995 6.636 118.849 6.86567 119.612 7.325C120.383 7.78433 120.998 8.39967 121.458 9.171C121.917 9.93367 122.147 10.7873 122.147 11.732ZM130.212 20.338C129.016 20.338 127.924 20.0303 126.936 19.415C125.956 18.7997 125.172 17.972 124.583 16.932C124.002 15.892 123.712 14.7437 123.712 13.487C123.712 12.5423 123.881 11.6583 124.219 10.835C124.557 10.003 125.02 9.275 125.61 8.651C126.208 8.01833 126.901 7.52433 127.69 7.169C128.478 6.81367 129.319 6.636 130.212 6.636C131.243 6.636 132.183 6.857 133.033 7.299C133.891 7.741 134.614 8.34333 135.204 9.106C135.802 9.86867 136.226 10.731 136.478 11.693C136.738 12.655 136.781 13.656 136.608 14.696H127.586C127.698 15.0773 127.872 15.424 128.106 15.736C128.348 16.0393 128.643 16.282 128.99 16.464C129.345 16.646 129.752 16.7413 130.212 16.75C130.662 16.7587 131.078 16.6547 131.46 16.438C131.841 16.2213 132.166 15.931 132.435 15.567L136.101 16.412C135.572 17.5647 134.783 18.5093 133.735 19.246C132.686 19.974 131.512 20.338 130.212 20.338ZM127.456 12.044H132.981C132.868 11.6107 132.677 11.2207 132.409 10.874C132.14 10.5273 131.815 10.2543 131.434 10.055C131.061 9.85567 130.654 9.756 130.212 9.756C129.778 9.756 129.371 9.85567 128.99 10.055C128.617 10.2543 128.296 10.5273 128.028 10.874C127.768 11.212 127.577 11.602 127.456 12.044ZM138.456 20V0.499998H142.044V20H138.456ZM148.748 26.5H145.16V7H148.748V8.404C149.164 7.89267 149.658 7.47667 150.23 7.156C150.802 6.82667 151.469 6.662 152.232 6.662C153.176 6.662 154.06 6.83967 154.884 7.195C155.716 7.55033 156.444 8.04433 157.068 8.677C157.692 9.301 158.181 10.0247 158.537 10.848C158.892 11.6713 159.07 12.5553 159.07 13.5C159.07 14.4447 158.892 15.333 158.537 16.165C158.181 16.997 157.692 17.7293 157.068 18.362C156.444 18.986 155.716 19.4757 154.884 19.831C154.06 20.1863 153.176 20.364 152.232 20.364C151.469 20.364 150.802 20.1993 150.23 19.87C149.658 19.5407 149.164 19.1247 148.748 18.622V26.5ZM152.18 10.107C151.59 10.107 151.057 10.263 150.581 10.575C150.113 10.8783 149.74 11.2857 149.463 11.797C149.194 12.3083 149.06 12.876 149.06 13.5C149.06 14.124 149.194 14.696 149.463 15.216C149.74 15.7273 150.113 16.1347 150.581 16.438C151.057 16.7413 151.59 16.893 152.18 16.893C152.769 16.893 153.306 16.7413 153.792 16.438C154.286 16.1347 154.676 15.7273 154.962 15.216C155.256 14.7047 155.404 14.1327 155.404 13.5C155.404 12.8847 155.261 12.3213 154.975 11.81C154.689 11.29 154.299 10.8783 153.805 10.575C153.319 10.263 152.778 10.107 152.18 10.107Z" fill={Fill_color} />
        </svg>
    )
}

export default Logo