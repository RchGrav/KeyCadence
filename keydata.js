// QWERTY Typing Speed Simulator Data

const typingSpeed = {
    // Most common letters in English; generally typed faster.
    'e': 0.6,
    't': 0.6,
    'a': 0.65, // Adjusted since 'a' is also a home row key.
    'o': 0.6,
    'i': 0.6,

    // Home row keys; generally typed faster due to muscle memory.
    's': 0.55,
    'd': 0.55,
    'f': 0.55,
    'j': 0.55,
    'k': 0.55,
    'l': 0.55,
    ';': 0.6,  // Slightly slower due to being a punctuation.

    // Keys typically typed slower because of reliance on the pinky.
    'q': 1.3,
    'p': 1.3,

    // Characters that require the shift key.
    '!': 1.4,
    '@': 1.4,
    '#': 1.4,
    '$': 1.4,
    '%': 1.4,

    // Middle keyboard keys which might be slightly slower.
    'g': 0.85,
    'h': 0.85,

    // Numbers; generally typed at a standard rate.
    '0': 1,
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    '5': 1,
    '6': 1,
    '7': 1,
    '8': 1,
    '9': 1,

    // Rest of the alphabet; not explicitly categorized above.
    'b': 0.9,
    'c': 0.9,
    'u': 0.9,
    'v': 0.9,
    'w': 0.9,
    'x': 0.9,
    'y': 0.9,
    'z': 0.9,
    'm': 0.9,
    'n': 0.9,
    'r': 0.9,

    // Other punctuation; typically slower because they might require reaches or shift key.
    ',': 1.25,
    '.': 1.25,
    '/': 1.25,
    '[': 1.25,
    ']': 1.25,
    '\\': 1.25,
    '-': 1.25,
    '=': 1.25,
    '<': 1.25,
    '>': 1.25,
    '?': 1.25
};

const adjacentKeys = {
    'q': ['w', 'a', 's'],
    'w': ['q', 'e', 's', 'a'],
    'e': ['w', 'r', 'd', 's'],
    'r': ['e', 't', 'f', 'd'],
    't': ['r', 'y', 'g', 'f'],
    'y': ['t', 'u', 'h', 'g'],
    'u': ['y', 'i', 'j', 'h'],
    'i': ['u', 'o', 'k', 'j'],
    'o': ['i', 'p', 'l', 'k'],
    'p': ['o', 'l'],
    'a': ['q', 's', 'z', 'w'],
    's': ['a', 'd', 'z', 'x', 'e', 'w'],
    'd': ['s', 'f', 'x', 'c', 'r', 'e'],
    'f': ['d', 'g', 'c', 'v', 't', 'r'],
    'g': ['f', 'h', 'v', 'b', 'y', 't'],
    'h': ['g', 'j', 'b', 'n', 'u', 'y'],
    'j': ['h', 'k', 'n', 'm', 'i', 'u'],
    'k': ['j', 'l', 'm', 'i', 'o'],
    'l': ['k', 'o'],
    'z': ['a', 's', 'x'],
    'x': ['z', 'c', 's', 'd'],
    'c': ['x', 'v', 'd', 'f'],
    'v': ['c', 'b', 'f', 'g'],
    'b': ['v', 'n', 'g', 'h'],
    'n': ['b', 'm', 'h', 'j'],
    'm': ['n', 'j', 'k'],
    // Including some numbers and common punctuation
    '1': ['2', 'q'],
    '2': ['1', '3', 'q', 'w'],
    '3': ['2', '4', 'w', 'e'],
    '4': ['3', '5', 'e', 'r'],
    '5': ['4', '6', 'r', 't'],
    '6': ['5', '7', 't', 'y'],
    '7': ['6', '8', 'y', 'u'],
    '8': ['7', '9', 'u', 'i'],
    '9': ['8', '0', 'i', 'o'],
    '0': ['9', 'o', 'p'],
    ',': ['m', '.', 'l'],
    '.': [',', '/', 'l', ';'],
    '/': ['.', ';'],
    ';': ['l', '/', '.'],
    "'": [';', '/']
};
const errorProne = {
    'q': { 'adjacent': ['w', 'a', 's'], 'errorRate': 0.9 },   // Little Finger and edge key
    'w': { 'adjacent': ['q', 'e', 's', 'a'], 'errorRate': 0.6 }, // Common key
    'e': { 'adjacent': ['w', 'r', 'd', 's'], 'errorRate': 0.5 }, // Most common letter
    'r': { 'adjacent': ['e', 't', 'f', 'd'], 'errorRate': 0.6 },
    't': { 'adjacent': ['r', 'y', 'g', 'f'], 'errorRate': 0.5 },
    'y': { 'adjacent': ['t', 'u', 'h', 'g'], 'errorRate': 0.6 },
    'u': { 'adjacent': ['y', 'i', 'j', 'h'], 'errorRate': 0.6 },
    'i': { 'adjacent': ['u', 'o', 'k', 'j'], 'errorRate': 0.5 },
    'o': { 'adjacent': ['i', 'p', 'l', 'k'], 'errorRate': 0.6 },
    'p': { 'adjacent': ['o', 'l'], 'errorRate': 0.9 },   // Little Finger and edge key
    'a': { 'adjacent': ['q', 's', 'z', 'w'], 'errorRate': 0.55 }, // Home row but also Little Finger
    's': { 'adjacent': ['a', 'd', 'z', 'x', 'e', 'w'], 'errorRate': 0.5 },
    'd': { 'adjacent': ['s', 'f', 'x', 'c', 'r', 'e'], 'errorRate': 0.45 }, // Home row
    'f': { 'adjacent': ['d', 'g', 'c', 'v', 't', 'r'], 'errorRate': 0.45 }, // Home row
    'g': { 'adjacent': ['f', 'h', 'v', 'b', 'y', 't'], 'errorRate': 0.65 }, // Center key
    'h': { 'adjacent': ['g', 'j', 'b', 'n', 'u', 'y'], 'errorRate': 0.65 }, // Center key
    'j': { 'adjacent': ['h', 'k', 'n', 'm', 'i', 'u'], 'errorRate': 0.45 }, // Home row
    'k': { 'adjacent': ['j', 'l', 'm', 'i', 'o'], 'errorRate': 0.45 }, // Home row
    'l': { 'adjacent': ['k', 'o'], 'errorRate': 0.55 },  // Home row but closer to edge
    'z': { 'adjacent': ['a', 's', 'x'], 'errorRate': 0.85 }, // Less frequently used
    'x': { 'adjacent': ['z', 'c', 's', 'd'], 'errorRate': 0.75 },
    'c': { 'adjacent': ['x', 'v', 'd', 'f'], 'errorRate': 0.65 },
    'v': { 'adjacent': ['c', 'b', 'f', 'g'], 'errorRate': 0.65 },
    'b': { 'adjacent': ['v', 'n', 'g', 'h'], 'errorRate': 0.65 },
    'n': { 'adjacent': ['b', 'm', 'h', 'j'], 'errorRate': 0.65 },
    'm': { 'adjacent': ['n', 'j', 'k'], 'errorRate': 0.7 },
    // Including some numbers and common punctuation
    '1': { 'adjacent': ['2', 'q'], 'errorRate': 0.8 },
    '2': { 'adjacent': ['1', '3', 'q', 'w'], 'errorRate': 0.75 },
    '3': { 'adjacent': ['2', '4', 'w', 'e'], 'errorRate': 0.7 },
    '4': { 'adjacent': ['3', '5', 'e', 'r'], 'errorRate': 0.7 },
    '5': { 'adjacent': ['4', '6', 'r', 't'], 'errorRate': 0.7 },
    '6': { 'adjacent': ['5', '7', 't', 'y'], 'errorRate': 0.7 },
    '7': { 'adjacent': ['6', '8', 'y', 'u'], 'errorRate': 0.7 },
    '8': { 'adjacent': ['7', '9', 'u', 'i'], 'errorRate': 0.7 },
    '9': { 'adjacent': ['8', '0', 'i', 'o'], 'errorRate': 0.7 },
    '0': { 'adjacent': ['9', 'o', 'p'], 'errorRate': 0.75 },
    ',': { 'adjacent': ['m', '.', 'l'], 'errorRate': 0.85 },
    '.': { 'adjacent': [',', '/', 'l', ';'], 'errorRate': 0.85 },
    '/': { 'adjacent': ['.', ';'], 'errorRate': 0.9 },
    ';': { 'adjacent': ['l', '/', '.'], 'errorRate': 0.8 },
    "'": { 'adjacent': [';', '/'], 'errorRate': 0.85 }
};
