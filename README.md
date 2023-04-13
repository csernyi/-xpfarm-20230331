# catMouseHard
https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf
Description:

You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.

Also, the cat cannot jump over the dog.

npm test -- --watchAll
npm test -- --watchAll --collect-coverage --verbose
## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

🚧 US #1 As a cartoon watcher I want to watch a cartoon with a cat-dog-mouse pair so that I can entertain myself
 ✅ Scenario #1 Given a cat-dog-mouse position When the positions are 'm.C' and the cat can jump 1 Then the result is 'boring without all three'
 ✅ Scenario #2 Given a cat-dog-mouse position When the positions are 'm.D' and the cat can jump 1 Then the result is 'boring without all three'
 ⚠ Scenario #3 Given a cat-dog-mouse position When the positions are 'D.C' and the cat can jump 1 Then the result is 'boring without all three'
