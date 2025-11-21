/**
 * Utils functions
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}
