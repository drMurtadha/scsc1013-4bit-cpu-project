# Project Brief: The 4-bit Adder Challenge

SCSC1013 Computer System & Organization, Semester 1, 2026/2027

> DRAFT. Weights, dates and group sizes are subject to confirmation by the lecturer.

## 1. Learning goals

By completing this project your group will:

1. Distinguish the architecture of a processor from its organization, using a real (simulated) machine. *(Week 10)*
2. Trace the fetch, decode and execute steps of every instruction in a program, and express them as micro-operations. *(Weeks 11 and 12)*
3. Analyse how memory size, addressing and interleaving constrain a processor design. *(Week 13)*
4. Measure the effect of cache organization on a real memory-access trace. *(Week 14)*
5. Evaluate the I/O control method used by a simple machine and propose an alternative. *(Week 15)*

## 2. Group arrangement

- Groups of **3 to 4 students**, registered with the lecturer by the date in Section 7.
- Each group receives a **group number**. Your group number decides the test inputs you must use (Section 4), so that every group's traces are different.

## 3. The machine

Use the Otago 4-bit CPU simulator: https://cosc204.cspages.otago.ac.nz/4-bit-cpu/

Read [`ISA_REFERENCE.md`](ISA_REFERENCE.md) before you start. In particular:

- the accumulator is 4 bits;
- memory has only 16 bytes, shared by code and data;
- `ADDA` can only add a **constant**; there is no way to add a value stored in memory directly.

## 4. The core program (Task B)

Write a program that:

1. reads a number **x** from the keypad;
2. reads a number **y** from the keypad;
3. computes **x + y**, using only the instructions in the ISA;
4. prints the result;
5. stops.

The whole program, including any memory locations you use for data, must fit in the 16 bytes of memory. Hint: think about how you could add two numbers if you were only allowed to count up and count down by one.

**Your test inputs:**

| Run | x | y |
|---|---|---|
| Run 1 (main trace) | (group number mod 5) + 3 | (group number mod 6) + 2 |
| Run 2 | 0 | 5 |
| Run 3 | 9 | 0 |
| Run 4 (overflow) | 12 | 7 |

Use **Run 1** for all trace-based tasks (C, E and F).

## 5. Tasks

### Task A: Architecture versus organization (Week 10)

1. Classify at least **six** features of this CPU as either *architecture* (visible to the programmer) or *organization* (implementation). Justify each choice using the definitions from Week 10.
2. Explain, with a screenshot of the Memory panel, how your program demonstrates the **stored-program (von Neumann) concept**. Refer specifically to the bytes you used for data.

### Task B: The program (Weeks 10 and 11)

1. Present your final program as a table with columns: *Address, Label, Assembly, Hex, Binary, Comment*.
2. Explain your algorithm in plain words or pseudocode before showing the code.
3. Show the printed output for **all four** test runs in Section 4, with screenshots.
4. Explain the result of **Run 4**. What happened, and why? How could a wider accumulator or a carry flag change this?

### Task C: The instruction cycle (Week 11)

1. Using `templates/trace_table.csv`, record **every instruction executed** in Run 1: step number, PC before fetch, IR, mnemonic, A after execution, PC after execution.
2. Write the fetch cycle in Register Transfer Language (RTL), using MAR, MBR, PC and IR, as in the Week 11 lecture.
3. For **three different** instructions in your program (one load or store, one arithmetic, one branch), write the execute-cycle micro-operations in RTL.
4. The simulator does not show MAR and MBR. For one `STA` instruction in your trace, state what MAR and MBR would hold at each time step.

### Task D: The control unit (Week 12)

1. For **each** of the ten opcodes, list the control signals or micro-operations the control unit must generate during the execute cycle.
2. Propose a **horizontal microinstruction format** for this CPU: name each control bit, and give the microinstruction(s) for `LDA $a` and `BEQ $a`.
3. Design **one new instruction** that would make your program shorter (for example, adding a memory value to A). Give its opcode (choose an unused one), its RTL, and rewrite your program to use it. How many bytes and how many executed instructions do you save for Run 1?
4. Would you implement this control unit as hardwired or microprogrammed? Justify your answer using the trade-offs from Week 12.

### Task E: Memory (Week 13)

1. Calculate the memory capacity in bits, and the number of address bits required.
2. Suppose memory is increased to 256 bytes. Explain why the current instruction format can no longer address all of memory, and propose **one** way to change the instruction format to fix this. State the cost of your change.
3. Suppose the 16 bytes are split into **2 banks using low-order interleaving**. For each memory access in your Run 1 trace, state which bank is used. How many times do two consecutive accesses go to the same bank? What does this mean for performance?

### Task F: Cache (Week 14)

1. Using `templates/memory_trace.csv`, list **every memory access** in Run 1 in order: each instruction fetch, and each data read or write by `LDA $`, `STA`, etc.
2. Simulate a **direct-mapped cache** for this trace for these configurations:
   - (a) 4 lines, 1 byte per block;
   - (b) 2 lines, 2 bytes per block;
   - (c) 4 lines, 2 bytes per block.

   For each, record hit or miss for every access, and state your assumption about writes (write-allocate or not).
3. Calculate the hit rate and the average memory access time (AMAT) for each configuration, assuming a hit time of 1 cycle and a miss penalty of 10 cycles.
4. Explain the differences using **temporal and spatial locality** and the structure of your loop. Which configuration would you choose, and why?

### Task G: Input/Output (Week 15)

1. Which of the four I/O control methods (programmed, interrupt-driven, DMA, channel) does this CPU use for `IN` and `OUT`? Justify your answer.
2. Suppose the keypad needs time before a value is ready. Describe how the program would have to change to wait for it under programmed I/O, and what new hardware or instructions would be needed.
3. Propose an interrupt-driven design for the keypad. What must the CPU save before running the interrupt routine, and where could it be saved in this 16-byte machine?
4. Explain why DMA would not be a sensible addition to this machine.

## 6. Deliverables

| Item | Format | Notes |
|---|---|---|
| Report | PDF, 6 to 8 pages excluding appendices | Follow `templates/REPORT_TEMPLATE.md` |
| Trace files | `trace_table.csv`, `memory_trace.csv` | Completed for Run 1 |
| Demonstration video | 3 to 5 minutes, MP4 or link | Show the program entered in the simulator and Run 1 executed **step by step** while one member explains |
| Contribution statement | 1 page appendix | Who did what; signed by all members |

## 7. Schedule (draft)

| Milestone | Week |
|---|---|
| Groups registered, brief released | Week 13 |
| Tasks A to D completed (recommended) | Week 14 |
| Tasks E to G completed (after Week 15 lecture) | Week 15 |
| Final submission on elearning.utm.my | End of Week 16 |

## 8. Rules

- Each group must submit its **own** program and traces. Because test inputs depend on your group number, copied traces will not match.
- You may discuss ideas with other groups, but you may not share code, tables or report text.
- If you use a generative AI tool, state in the report which tool, for which part, and how you checked its output. You remain responsible for every answer.
- Cite every source you use, including the lecture slides and the simulator.
