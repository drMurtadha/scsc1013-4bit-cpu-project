# Instruction Set Reference: Otago 4-bit CPU

Summary of the simulator at https://cosc204.cspages.otago.ac.nz/4-bit-cpu/ as observed on 26 October 2026. If the simulator's own tutorial disagrees with this page, the simulator is correct; please report the difference to the lecturer.

## Machine organization

| Component | Size / behaviour |
|---|---|
| Accumulator (A) | 4 bits (values 0 to 15) |
| Program Counter (PC) | 4 bits, starts at address 0 after Reset |
| Instruction Register (IR) | 8 bits, holds the instruction being executed |
| Memory | 16 locations (addresses 0 to F), 8 bits each, shared by program **and** data |
| Input | Keypad, gives a 4-bit value |
| Output | Printer, prints a 4-bit value in hex or decimal |

## Instruction format

Every instruction is **1 byte**:

```
 7   6   5   4   3   2   1   0
+---------------+---------------+
|    opcode     |    operand    |
+---------------+---------------+
```

The operand is either a memory address or an immediate value, depending on the instruction. Some instructions ignore the operand.

## Instruction set

| Mnemonic | Opcode (hex) | Operand | Effect |
|---|---|---|---|
| `STOP` | 0 | none | Halt the CPU |
| `STA $a` | 1 | address | Store A into memory location `a` |
| `LDA #$v` | 2 | value | Load the value `v` into A |
| `LDA $a` | 3 | address | Load the contents of memory location `a` into A |
| `ADDA #$v` | 4 | value | Add the value `v` to A |
| `DECA` | 6 | none | Decrement A by one |
| `IN` | 8 | none | Read the keypad value into A |
| `OUT` | A | none | Print the value of A |
| `BRA $a` | C | address | Branch (jump) to address `a` |
| `BEQ $a` | E | address | Branch to address `a` if A is zero |

Example encodings: `LDA #$F` is `2F` (0010 1111); `BRA $1` is `C1` (1100 0001); `OUT` is `A0` (1010 0000).

## Things to notice

- **There is no instruction that adds a memory value to A.** `ADDA` only adds a constant. This is the core constraint of the project.
- A is only 4 bits wide, so arithmetic wraps around. Test what happens when a result exceeds 15 and when `DECA` is applied to 0, and record what you observe.
- Program and data live in the **same** 16 bytes. The Memory panel decodes every byte as if it were an instruction, including bytes you use for data.
- `IN` takes the value currently set on the keypad. When running step by step, set the keypad **before** stepping over the `IN` instruction.

## Using the simulator

1. Click the bits of each memory row to enter your program in machine code.
2. Use **Step** to execute one instruction at a time and watch PC, A and IR change.
3. Use **Run** to execute at full speed; **Reset** returns the PC to 0.
4. Work through the simulator's built-in countdown tutorial before starting Task B.

Note that the simulator shows PC, A and IR, but **not** the memory address register (MAR) or memory buffer register (MBR). Task C asks you to reason about these hidden registers yourself.
