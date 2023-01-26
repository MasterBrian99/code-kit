package generators

import (
	"fmt"
	"math/rand"
)

type GeneratePasswordInput struct {
	alpha    bool
	calpha   bool
	num      bool
	specials bool
	length   int
}

func GeneratePassword(input GeneratePasswordInput) string {
	alpha := "abcdefghijklmnopqrstuvwxyz"
	calpha := "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	num := "1234567890"
	specials := "!@#$%^&*"
	combined := ""
	println(alpha)

	combined = stringCombineHelper(input.alpha, alpha, combined)
	combined = stringCombineHelper(input.calpha, calpha, combined)
	combined = stringCombineHelper(input.num, num, combined)
	combined = stringCombineHelper(input.specials, specials, combined)
	// combined = strShuffle(combined)
	var letterRunes = randStringRunes(len(combined), []rune(combined))
	println(combined)
	println(letterRunes)
	println(input.length)
	return combined

}

func stringCombineHelper(isAdd bool, addingValue string, value string) string {
	if isAdd {
		value = value + addingValue
	}
	fmt.Println(value)
	return value
}

// func strShuffle(str string) string {
// 	n := rand.Intn(10) + rand.Intn(rand.Intn(10))
// 	var runes []rune
// 	for _, runeval := range str {
// 		runes = append(runes, runeval)
// 	}
// 	var shuffle = func() bool {
// 		return rand.Intn(2) == 1
// 	}
// 	var repeat = func() {
// 		for i := 0; i < len(runes)-1; i++ {
// 			if shuffle() {
// 				temp := runes[i]
// 				runes[i] = runes[i+1]
// 				runes[i+1] = temp
// 			}
// 		}
// 		n--
// 	}
// 	for n > 0 {
// 		repeat()
// 	}
// 	return string(runes)
// }

func randStringRunes(n int, combineString []rune) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = combineString[rand.Intn(len(combineString))]
	}
	return string(b)
}

// const alpha = 'abcdefghijklmnopqrstuvwxyz';
// const calpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const num = '1234567890';
// const specials = ',.!@#$%^&*';
// const options = [alpha, alpha, alpha, calpha, calpha, num, num, specials];
// let opt, choose;
// let pass = "";
// for ( let i = 0; i < 8; i++ ) {
//   opt = Math.floor(Math.random() * options.length);
//   choose = Math.floor(Math.random() * (options[opt].length));
//   pass = pass + options[opt][choose];
//   options.splice(opt, 1);
// }
// console.log(pass);
