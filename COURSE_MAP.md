# Course Map: Weeks and Project Stages

This page shows which lecture week each stage of the project draws on. It is compiled from the learning goals, tasks and schedule in [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md). It is a draft, like the brief, and the dates remain subject to confirmation by the lecturer.

## Weeks to tasks

| Week | Topic | Project task | Report section | Main deliverable |
|---|---|---|---|---|
| 10 | Architecture versus organization | **Task A**, and the start of **Task B** | 2. Task A, 3. Task B | Feature classification; Memory panel screenshot |
| 10 to 11 | Program design and the instruction cycle | **Task B**: the 16-byte adder and four test runs | 3. Task B | Program table; screenshots of all four runs; explanation of Run 4 (overflow) |
| 11 | Fetch, decode and execute | **Task C**: the instruction cycle | 4. Task C | `trace_table.csv`; fetch and execute RTL; MAR and MBR values |
| 12 | The control unit | **Task D**: the control unit | 5. Task D | Control signals for ten opcodes; microinstruction format; one new instruction |
| 13 | Memory | **Task E**: memory | 6. Task E | Capacity and address bits; 256-byte fix; 2-bank interleaving |
| 14 | Cache | **Task F**: cache | 7. Task F | `memory_trace.csv`; three direct-mapped configurations; hit rate and AMAT |
| 15 | Input/Output | **Task G**: input and output | 8. Task G | I/O method; polling and interrupt designs; why not DMA |
| 16 | Submission | Report, traces, video and contribution statement | 1. Introduction, 9. Conclusion, References, Appendices | Final submission on elearning.utm.my |

## Draft schedule

| Milestone | Week |
|---|---|
| Groups registered, brief released | Week 13 |
| Tasks A to D completed (recommended) | Week 14 |
| Tasks E to G completed (after Week 15 lecture) | Week 15 |
| Final submission on elearning.utm.my | End of Week 16 |

## Notes

- Tasks C, E and F all use the Run 1 trace from Task B, so Task B comes first.
- Tasks E and F cover Week 13 and Week 14 material, so a group can start them before the Week 15 lecture.
- The project documents refer to lecture weeks, not textbook chapter numbers. The README cites Stallings and Null and Lobur without chapters, so none are listed here.
- Full task wording is in [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md); the report structure is in [`templates/REPORT_TEMPLATE.md`](templates/REPORT_TEMPLATE.md).
