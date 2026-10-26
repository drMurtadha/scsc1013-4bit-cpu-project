# SCSC1013 Mini Project: The 4-bit Adder Challenge

**Course:** SCSC1013 Computer System & Organization, Faculty of Computing, Universiti Teknologi Malaysia
**Semester:** 1, 2026/2027 (Section 01)
**Status:** DRAFT. Content may change before release to students.

## Overview

In this group project you program a tiny 4-bit accumulator CPU in raw machine code, then use your own program to study every major topic of Weeks 10 to 15: computer organization, the instruction cycle, the control unit, memory, cache and I/O.

The CPU you will use is the **4-bit CPU simulator** from the COSC204 Computer Systems course at the University of Otago:

> https://cosc204.cspages.otago.ac.nz/4-bit-cpu/

It runs in any web browser. Nothing needs to be installed.

## The challenge in one sentence

Write a program that reads two numbers from the keypad, adds them, and prints the sum, **using a CPU that has no instruction for adding two values in memory**, and fit the whole program and its data into **16 bytes**.

## Repository contents

| File | Purpose |
|---|---|
| [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md) | Full project instructions: tasks A to G, deliverables, rules, schedule |
| [`ISA_REFERENCE.md`](ISA_REFERENCE.md) | Summary of the simulator's instruction set and how to use it |
| [`RUBRIC.md`](RUBRIC.md) | Assessment criteria and marks |
| [`templates/REPORT_TEMPLATE.md`](templates/REPORT_TEMPLATE.md) | Report structure your group must follow |
| [`templates/trace_table.csv`](templates/trace_table.csv) | Template for the instruction-cycle trace (Task C) |
| [`templates/memory_trace.csv`](templates/memory_trace.csv) | Template for the memory-access trace and cache simulation (Task F) |

## Quick start

1. Open the simulator link above and work through its built-in tutorial (the countdown program).
2. Read [`ISA_REFERENCE.md`](ISA_REFERENCE.md).
3. Read [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md) as a group and agree on roles.
4. Fork or copy this repository, and keep your report and trace files in your own copy.

## Acknowledgement

The simulator is provided by the Department of Computer Science, University of Otago, for its COSC204 course. This project only links to it; no part of the simulator is copied here.

Lecture material references: W. Stallings, *Computer Organization and Architecture: Designing for Performance*, 9th ed. (2013) and 10th ed. (2016), Pearson; L. Null and J. Lobur, *The Essentials of Computer Organization and Architecture* (2003), Jones and Bartlett.
