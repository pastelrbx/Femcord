/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { CSSProperties, ImgHTMLAttributes, JSX } from "react";
import { Activity as DiscordActivity } from "@vencord/discord-types";

export type Activity = DiscordActivity;

export interface Application {
    id: string;
    name: string;
    icon: string;
    description: string;
    summary: string;
    type: number;
    hook: boolean;
    guild_id: string;
    executables: Executable[];
    verify_key: string;
    publishers: Developer[];
    developers: Developer[];
    flags: number;
}

export interface Developer {
    id: string;
    name: string;
}

export interface Executable {
    os: string;
    name: string;
    is_launcher: boolean;
}

export interface ApplicationIcon {
    image: ImgHTMLAttributes<HTMLImageElement> & {
        src: string;
        alt: string;
    };
    activity: Activity;
    application?: Application;
}

export interface ActivityListIcon {
    iconElement: JSX.Element;
    tooltip?: JSX.Element | string;
}

export interface IconCSSProperties extends CSSProperties {
    "--icon-size": string;
}
