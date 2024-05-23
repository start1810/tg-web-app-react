const kmCoef = 0.63;

export const levels = {
    oneKm: [
    (8 * 60 + 30) * kmCoef,
    (8 * 60 + 15) * kmCoef,
    (8 * 60 + 2) * kmCoef,
    (7 * 60 + 49) * kmCoef,
    (7 * 60 + 37) * kmCoef,
    (7 * 60 + 25) * kmCoef,
    (7 * 60 + 14) * kmCoef,
    (7 * 60 + 4) * kmCoef,
    (6 * 60 + 54) * kmCoef,
    (6 * 60 + 44) * kmCoef,
    (6 * 60 + 35) * kmCoef,
    (6 * 60 + 27) * kmCoef,
    (6 * 60 + 19) * kmCoef,
    (6 * 60 + 11) * kmCoef,
    (6 * 60 + 3) * kmCoef,
    (5 * 60 + 56) * kmCoef,
    (5 * 60 + 49) * kmCoef,
    (5 * 60 + 42) * kmCoef,
    (5 * 60 + 36) * kmCoef,
    (5 * 60 + 30) * kmCoef,
    (5 * 60 + 24) * kmCoef,
    (5 * 60 + 18) * kmCoef,
    (5 * 60 + 13) * kmCoef,
    (5 * 60 + 7) * kmCoef,
    (5 * 60 + 2) * kmCoef,
    (4 * 60 + 57) * kmCoef,
    (4 * 60 + 53) * kmCoef,
    (4 * 60 + 48) * kmCoef,
    (4 * 60 + 44) * kmCoef,
    (4 * 60 + 39) * kmCoef,
    (4 * 60 + 35) * kmCoef,
    (4 * 60 + 31) * kmCoef,
    (4 * 60 + 27) * kmCoef,
    (4 * 60 + 24) * kmCoef,
    (4 * 60 + 20) * kmCoef,
    (4 * 60 + 16) * kmCoef,
    (4 * 60 + 13) * kmCoef,
    (4 * 60 + 10) * kmCoef,
    (4 * 60 + 6) * kmCoef,
    (4 * 60 + 3) * kmCoef,
    (4 * 60 + 0) * kmCoef,
    (3 * 60 + 57) * kmCoef,
    (3 * 60 + 54) * kmCoef,
    (3 * 60 + 52) * kmCoef,
    (3 * 60 + 49) * kmCoef,
    (3 * 60 + 46) * kmCoef,
    (3 * 60 + 44) * kmCoef,
    (3 * 60 + 41) * kmCoef,
    (3 * 60 + 38) * kmCoef,
    (3 * 60 + 36) * kmCoef,
    (3 * 60 + 34) * kmCoef,
    (3 * 60 + 31) * kmCoef,
    (3 * 60 + 29) * kmCoef,
    (3 * 60 + 27) * kmCoef,
    (3 * 60 + 25) * kmCoef,
    (3 * 60 + 23) * kmCoef,
    ],
    threeKm: [
        1076,
        1047,
        1019,
        993,
        969,
        945,
        923,
        901,
        881,
        861,
        843,
        825,
        808,
        791,
        775,
        760,
        746,
        732,
        718,
        705,
        693,
        681,
        669,
        658,
        647,
        637,
        627,
        617,
        608,
        598,
        590,
        581,
        573,
        565,
        557,
        549,
        542,
        535,
        528,
        521,
        514,
        508,
        502,
        496,
        490,
        484,
        478,
        473,
        7 * 60 + 48,
        7 * 60 + 43,
        7 * 60 + 37,
        7 * 60 + 32,
        7 * 60 + 27,
        7 * 60 + 23,
        7 * 60 + 18,
        7 * 60 + 14,
    ],
    fiveKm: [
        1840,
        1791,
        1745,
        1701,
        1659,
        1620,
        1582,
        1546,
        1512,
        1479,
        1448,
        1418,
        1389,
        1361,
        1335,
        1310,
        1285,
        1262,
        1239,
        1218,
        1197,
        1176,
        1157,
        1138,
        1120,
        1102,
        1085,
        1069,
        1053,
        1037,
        1023,
        1008,
        994,
        980,
        967,
        954,
        942,
        929,
        918,
        906,
        895,
        884,
        873,
        863,
        853,
        843,
        834,
        824,
        13 * 60 + 35,
        13 * 60 + 26,
        13 * 60 + 17,
        13 * 60 + 9,
        13 * 60 + 1,
        12 * 60 + 53,
        12 * 60 + 45,
        12 * 60 + 37,
    ],
    tenKm: [
        63 * 60 + 46,
        62 * 60 + 3,
        60 * 60 + 26,
        58 * 60 + 54,
        57 * 60 + 26,
        56 * 60 + 3,
        54 * 60 + 44,
        53 * 60 + 29,
        52 * 60 + 17,
        56 * 60 + 3,
        54 * 60 + 44,
        53 * 60 + 29,
        52 * 60 + 17,
        51 * 60 + 9,
        50 * 60 + 3,
        49 * 60 + 1,
        48 * 60 + 1,
        47 * 60 + 4,
        46 * 60 + 9,
        45 * 60 + 16,
        44 * 60 + 25,
        43 * 60 + 36,
        42 * 60 + 50,
        42 * 60 + 4,
        41 * 60 + 21,
        40 * 60 + 39,
        39 * 60 + 59,
        39 * 60 + 20,
        38 * 60 + 42,
        38 * 60 + 6,
        37 * 60 + 31,
        36 * 60 + 57,
        36 * 60 + 24,
        35 * 60 + 52,
        35 * 60 + 22,
        34 * 60 + 52,
        34 * 60 + 23,
        33 * 60 + 55,
        33 * 60 + 28,
        33 * 60 + 1,
        32 * 60 + 35,
        32 * 60 + 11,
        31 * 60 + 46,
        31 * 60 + 23,
        31 * 60 + 0,
        30 * 60 + 38,
        30 * 60 + 16,
        29 * 60 + 55,
        29 * 60 + 34,
        29 * 60 + 14,
        28 * 60 + 55,
        28 * 60 + 36,
        28 * 60 + 17,
        27 * 60 + 59,
        27 * 60 + 41,
        27 * 60 + 24,
        27 * 60 + 7,
        26 * 60 + 51,
        26 * 60 + 34,
        26 * 60 + 19
    ],
    semiMarathon: [
        2 * 3600 + 21 * 60 + 4,
        2 * 3600 + 17 * 60 + 21,
        2 * 3600 + 13 * 60 + 49,
        2 * 3600 + 10 * 60 + 27,
        2 * 3600 + 7 * 60 + 16,
        2 * 3600 + 4 * 60 + 13,
        2 * 3600 + 1 * 60 + 19,
        1 * 3600 + 58 * 60 + 34,
        1 * 3600 + 55 * 60 + 55,
        1 * 3600 + 53 * 60 + 24,
        1 * 3600 + 50 * 60 + 59,
        1 * 3600 + 48 * 60 + 40,
        1 * 3600 + 46 * 60 + 27,
        1 * 3600 + 44 * 60 + 20,
        1 * 3600 + 42 * 60 + 17,
        1 * 3600 + 40 * 60 + 20,
        1 * 3600 + 38 * 60 + 27,
        1 * 3600 + 36 * 60 + 38,
        1 * 3600 + 34 * 60 + 53,
        1 * 3600 + 33 * 60 + 12,
        1 * 3600 + 31 * 60 + 35,
        1 * 3600 + 30 * 60 + 12,
        1 * 3600 + 28 * 60 + 31,
        1 * 3600 + 27 * 60 + 4,
        1 * 3600 + 25 * 60 + 40,
        1 * 3600 + 24 * 60 + 18,
        1 * 3600 + 23 * 60 + 0,
        1 * 3600 + 21 * 60 + 43,
        1 * 3600 + 20 * 60 + 30,
        1 * 3600 + 19 * 60 + 18,
        1 * 3600 + 18 * 60 + 9,
        1 * 3600 + 17 * 60 + 2,
        1 * 3600 + 15 * 60 + 57,
        1 * 3600 + 14 * 60 + 54,
        1 * 3600 + 13 * 60 + 53,
        1 * 3600 + 12 * 60 + 53,
        1 * 3600 + 11 * 60 + 56,
        1 * 3600 + 11 * 60 + 0,
        1 * 3600 + 10 * 60 + 5,
        1 * 3600 + 9 * 60 + 12,
        1 * 3600 + 8 * 60 + 21,
        1 * 3600 + 7 * 60 + 31,
        1 * 3600 + 6 * 60 + 42,
        1 * 3600 + 5 * 60 + 54,
        1 * 3600 + 5 * 60 + 8,
        1 * 3600 + 4 * 60 + 23,
        1 * 3600 + 3 * 60 + 39,
        1 * 3600 + 2 * 60 + 56,
        1 * 3600 + 2 * 60 + 15,
        1 * 3600 + 1 * 60 + 34,
        1 * 3600 + 0 * 60 + 54,
        1 * 3600 + 0 * 60 + 15,
        0 * 3600 + 59 * 60 + 38,
        0 * 3600 + 59 * 60 + 1,
        0 * 3600 + 58 * 60 + 25,
        0 * 3600 + 57 * 60 + 50,
    ]

}