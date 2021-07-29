pragma solidity >=0.5.0 <0.8.6;


//To compile the code do solc helloworld.sol 
contract Helloworld{
  //Here the type of function get is public because of which it can recieve inputs from functions that are belonging to other contracts too which is not possible in the case of 
  //private functions(they can only use values which are in their contract.)
  function get() public pure returns (string memory){
          return 'Hello Contract';
          }
  
  }

  //SPDX-License-Identifier: UNLICENSED
  
#Code written at 29 July by Shubham Patel
