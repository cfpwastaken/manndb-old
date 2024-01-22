import type { TagInfo } from "$lib/types.js";
import { json } from "@sveltejs/kit";

// xorg laptop

const TAG_INFO: { [key: string]: TagInfo } = {
	linux: {
		description: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel."
	},
	alpine: {
		description: "Alpine Linux is a Linux distribution based on musl and BusyBox, designed for security, simplicity, and resource efficiency."
	},
	"file system": {
		description: "In computing, a file system or filesystem, controls how data is stored and retrieved. Without a file system, data placed in a storage medium would be one large body of data with no way to tell where one piece of data stops and the next begins."
	},
	bluetooth: {
		description: "Bluetooth is a wireless technology standard used for exchanging data between fixed and mobile devices over short distances using UHF radio waves in the industrial, scientific and medical radio bands, from 2.402 GHz to 2.480 GHz, and building personal area networks."
	},
	gnome: {
		description: "GNOME is a free and open-source desktop environment for Unix-like operating systems. GNOME was originally an acronym for GNU Network Object Model Environment, but the acronym was dropped because it no longer reflected the vision of the GNOME project."
	},
	tv: {
		description: ""
	},
	overscan: {
		description: "Overscan is a behaviour in certain television sets, in which part of the input picture is shown outside of the visible bounds of the screen. It then requires the viewer to pan around the screen to see the full image."
	},
	pico: {
		description: "The Raspberry Pi Pico is a microcontroller board by Raspberry Pi. It is the first product in the Raspberry Pi Pico series. It is based on the Raspberry Pi RP2040 microcontroller chip designed by Raspberry Pi in the United Kingdom."
	},
	raspberrypi: {
		description: "The Raspberry Pi is a series of small single-board computers developed in the United Kingdom by the Raspberry Pi Foundation to promote the teaching of basic computer science in schools and in developing countries."
	},
	micropython: {
		description: "MicroPython is a software implementation of the Python 3 programming language, written in C, that is optimized to run on a microcontroller."
	},
	esphome: {
		description: "ESPHome is a system to control your ESP8266/ESP32 by simple yet powerful configuration files and control them remotely through Home Automation systems."
	},
	xorg: {
		description: "X.Org, often referred to as X, is an open-source implementation of the X Window System, which provides the basic framework for graphical user interfaces on Unix-like systems."
	},
	laptop: {
		description: ""
	}
}

export async function GET({ params }) {
	return json(TAG_INFO[params.tag]);
}
