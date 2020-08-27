export const enum events {
    walk, /* Move within a room */
    chat, /* Custom Text Spoken */
    speak, /* Pre-Programed text */
    join, /* Other user joins room */
    leave, /* Other user leaves room*/
    transfer, /* You move between rooms */
    kick, /* Server is mad at you */
}