#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::vec;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

struct CreateToken {
    with_uppercase: bool,
    with_lowercase: bool,
    with_numbers: bool,
    with_symbols: bool,
}

struct TokenValues {
    uppercase: String,
    lowercase: String,
    numbers: String,
    symbols: String,
}

#[tauri::command]
fn token_generate() -> String {
    let values = TokenValues {
        uppercase: "ABCDEFGHIJKLMOPQRSTUVWXYZ".to_string(),
        lowercase: "abcdefghijklmopqrstuvwxyz".to_string(),
        numbers: "0123456789".to_string(),
        symbols: ".,;".to_string(),
    };
    let create_tokens = CreateToken {
        with_uppercase: false,
        with_lowercase: false,
        with_numbers: true,
        with_symbols: true,
    };
    let mut current_val: MyString = MyString {
        parts: vec!["".to_string()],
    };
    let str_string = MyString::set_values(&mut current_val, create_tokens, values);
    let s: String = current_val.try_into().into_iter().collect();
    println!("{}", s);
    println!("{:?}", str_string);
    s.to_string()
}

struct MyString {
    parts: Vec<String>,
}

impl MyString {
    fn set_values(&mut self, create_tokens: CreateToken, values: TokenValues) {
        if create_tokens.with_lowercase {
            self.parts.push(values.lowercase)
        }
        if create_tokens.with_uppercase {
            self.parts.push(values.uppercase)
        }
        if create_tokens.with_numbers {
            self.parts.push(values.numbers)
        }
        if create_tokens.with_symbols {
            self.parts.push(values.symbols)
        }
    }
    fn set_to_string(&mut self) {
        self.try_into().into_iter().collect()
    }
}
