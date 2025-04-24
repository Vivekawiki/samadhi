// This file contains the timing information for each syllable in the mantras
// The timings are in seconds and represent when each syllable should be highlighted
// during audio playback

export interface TimedSyllable {
  text: string;
  startTime: number;
  endTime: number;
}

// Om Mantra
export const omMantraSyllables: TimedSyllable[] = [
  { text: "ॐ", startTime: 0, endTime: 3 }
];

// Gayatri Mantra
// Note: These are approximate timings and should be adjusted based on the actual audio recording
export const gayatriMantraSyllables: TimedSyllable[] = [
  { text: "ॐ ", startTime: 0, endTime: 1.5 },
  { text: "भूर्", startTime: 1.5, endTime: 2.0 },
  { text: "भुवः ", startTime: 2.0, endTime: 2.5 },
  { text: "स्वः ", startTime: 2.5, endTime: 3.0 },
  { text: "तत्", startTime: 3.0, endTime: 3.5 },
  { text: "स", startTime: 3.5, endTime: 3.8 },
  { text: "वि", startTime: 3.8, endTime: 4.1 },
  { text: "तुर्", startTime: 4.1, endTime: 4.4 },
  { text: "व", startTime: 4.4, endTime: 4.7 },
  { text: "रे", startTime: 4.7, endTime: 5.0 },
  { text: "ण्यं ", startTime: 5.0, endTime: 5.5 },
  { text: "भर्", startTime: 5.5, endTime: 5.8 },
  { text: "गो ", startTime: 5.8, endTime: 6.2 },
  { text: "दे", startTime: 6.2, endTime: 6.5 },
  { text: "व", startTime: 6.5, endTime: 6.8 },
  { text: "स्य ", startTime: 6.8, endTime: 7.2 },
  { text: "धी", startTime: 7.2, endTime: 7.5 },
  { text: "म", startTime: 7.5, endTime: 7.8 },
  { text: "हि ", startTime: 7.8, endTime: 8.2 },
  { text: "धि", startTime: 8.2, endTime: 8.5 },
  { text: "यो ", startTime: 8.5, endTime: 8.8 },
  { text: "यो ", startTime: 8.8, endTime: 9.1 },
  { text: "नः ", startTime: 9.1, endTime: 9.5 },
  { text: "प्र", startTime: 9.5, endTime: 9.8 },
  { text: "चो", startTime: 9.8, endTime: 10.1 },
  { text: "द", startTime: 10.1, endTime: 10.4 },
  { text: "यात्", startTime: 10.4, endTime: 11.0 }
];

// Mahamrityunjaya Mantra
// Note: These are approximate timings and should be adjusted based on the actual audio recording
export const mahamrityunjayaMantraSyllables: TimedSyllable[] = [
  { text: "ॐ ", startTime: 0, endTime: 1.5 },
  { text: "त्र्य", startTime: 1.5, endTime: 2.0 },
  { text: "म्ब", startTime: 2.0, endTime: 2.5 },
  { text: "कं ", startTime: 2.5, endTime: 3.0 },
  { text: "य", startTime: 3.0, endTime: 3.3 },
  { text: "जा", startTime: 3.3, endTime: 3.6 },
  { text: "म", startTime: 3.6, endTime: 3.9 },
  { text: "हे ", startTime: 3.9, endTime: 4.2 },
  { text: "सु", startTime: 4.2, endTime: 4.5 },
  { text: "ग", startTime: 4.5, endTime: 4.8 },
  { text: "न्धिं ", startTime: 4.8, endTime: 5.2 },
  { text: "पु", startTime: 5.2, endTime: 5.5 },
  { text: "ष्टि", startTime: 5.5, endTime: 5.8 },
  { text: "व", startTime: 5.8, endTime: 6.1 },
  { text: "र्ध", startTime: 6.1, endTime: 6.4 },
  { text: "न", startTime: 6.4, endTime: 6.7 },
  { text: "म् ", startTime: 6.7, endTime: 7.0 },
  { text: "उ", startTime: 7.0, endTime: 7.3 },
  { text: "र्वा", startTime: 7.3, endTime: 7.6 },
  { text: "रु", startTime: 7.6, endTime: 7.9 },
  { text: "क", startTime: 7.9, endTime: 8.2 },
  { text: "मि", startTime: 8.2, endTime: 8.5 },
  { text: "व ", startTime: 8.5, endTime: 8.8 },
  { text: "ब", startTime: 8.8, endTime: 9.1 },
  { text: "न्ध", startTime: 9.1, endTime: 9.4 },
  { text: "ना", startTime: 9.4, endTime: 9.7 },
  { text: "न् ", startTime: 9.7, endTime: 10.0 },
  { text: "मृ", startTime: 10.0, endTime: 10.3 },
  { text: "त्यो", startTime: 10.3, endTime: 10.6 },
  { text: "र्मु", startTime: 10.6, endTime: 10.9 },
  { text: "क्षी", startTime: 10.9, endTime: 11.2 },
  { text: "य ", startTime: 11.2, endTime: 11.5 },
  { text: "मा", startTime: 11.5, endTime: 11.8 },
  { text: "मृ", startTime: 11.8, endTime: 12.1 },
  { text: "ता", startTime: 12.1, endTime: 12.4 },
  { text: "त्", startTime: 12.4, endTime: 13.0 }
];
